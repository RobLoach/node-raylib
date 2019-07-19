// janky hack to generate the type declarations from the cheatsheet:
// https://www.raylib.com/cheatsheet/cheatsheet.html

const fs = require("fs")

String.prototype.regexLastIndexOf = function(regex, startpos) {
  regex = (regex.global) ? regex : new RegExp(regex.source, "g" + (regex.ignoreCase ? "i" : "") + (regex.multiLine ? "m" : ""));
  if(typeof (startpos) == "undefined") {
      startpos = this.length;
  } else if(startpos < 0) {
      startpos = 0;
  }
  var stringToWorkWith = this.substring(0, startpos + 1);
  var lastIndexOf = -1;
  var nextStop = 0;
  while((result = regex.exec(stringToWorkWith)) != null) {
      lastIndexOf = result.index;
      regex.lastIndex = ++nextStop;
  }
  return lastIndexOf;
}

function getData(str) {
	if(str.indexOf("//") === 0 || !str || str.charCodeAt(0) === 13 || str.charCodeAt(0) === 32) return null // if line is comment or blank
	const decl = str.split("//")[0] // get all data before comment
	
  const name = decl.match(/[^.| |\*]+\(/)[0].replace(" ", "")
	const output = {
		comment: str.split("//")[1].trim(), // explanation comment
		name: name.replace("(", "").trim(),
		returnType: decl.substring(0, decl.indexOf(name)).trim(),
		args: decl.substring(decl.indexOf(name) + name.length, decl.indexOf(")")).split(", ").map(arg => ({
      name: arg.substring(arg.regexLastIndexOf(/\*| /) + 1).trim(),
      type: arg.substring(0, arg.regexLastIndexOf(/\*| /) + 1).trim()
    }))
	}

	return output
}

function jsifyType(t) {
  if(t === "bool") return "boolean"
  if(t === "float" || t === "int" || t === "unsigned int" || t === "unsigned char" || 
     t === "double" || t === "int *" || t === "int *" || t == "char **" || t === "long") return "number"
  if(t === "const char *" || t === "char *" || t === "char" || t === "const char") return "string"
  else return t.replace("*", "").trim()
}

function gen(name) {
  fs.readFile(`./_${name}.txt`, "utf8", (err, data) => {
    if(err) console.error(err)
    else {
      let output = `import r from "./bindings/raylib"\n\n\n`
      let fns = data.split("\n")
      fns.forEach(str => {
        if(!str) return
        const fn = getData(str)
        if(!fn) return
        output += `export const ${fn.name}: (${fn.args.length ? fn.args.reduce((acc, cur, i) => acc + cur.name === "void" ? "" : cur.name === "..." ? "...: any" : cur.name + ": " + jsifyType(cur.type) + (i === fn.args.length - 1 ? "" : ", "), "") : ""}) => ${jsifyType(fn.returnType)} = r.${fn.name} //${fn.comment} \n`
      })
      fs.writeFile(`./${name}.ts`, output, (err) => {
        if(err) console.error(error)
      })
    }
  })
}

gen("core")
gen("shapes")
gen("textures")
gen("text")
gen("models")
gen("shaders")
gen("audio")
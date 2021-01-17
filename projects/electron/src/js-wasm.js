class Index {
    constructor(index, generation) {
      this.index = index;
      this.generation = generation;
    }

    toNum() {
      return Number(BigInt(this.generation) << BigInt(32) | BigInt(this.index));
    }
  }

  Index.fromNum = function(n) {
    let i = Number(((BigInt(n)  & BigInt(0xffffffff00000000)) >> BigInt(32)) & BigInt(0xffffffff));
    let g = n & 0xffffffff;
    return new Index(g, i);
  };

  class GenerationalArena {
    constructor() {
      this.items = [];
      this.generation = 0;
      this.free_list_head = null;
      this.length = 0;
    }

    insert(v) {
      // lets use the first free entry if we have one
      if (this.free_list_head !== null) {
        let i = this.free_list_head;
        this.free_list_head = this.items[i].next_free;
        this.items[i] = {
          generation: this.generation,
          value: v
        };
        this.length += 1;
        return new Index(i, this.generation);
      }

      this.items.push({
        generation: this.generation,
        value: v
      });
      let idx = new Index(this.items.length - 1, this.generation);
      this.length += 1;
      return idx;
    }

    contains(idx) {
      return this.get(idx) !== undefined;
    }

    get(i) {
      let e = this.items[i.index];
      if (e && e.generation === i.generation) {
        return e.value;
      }
      return undefined;
    }

    remove(idx) {
      if (idx.index >= this.items.length) {
        return undefined;
      }

      let e = this.items[idx.index];
      if (e.generation !== undefined && e.generation == idx.generation) {
        this.generation += 1;
        this.items[idx.index] = {
          next_free: this.free_list_head
        };
        this.free_list_head = idx.index;
        this.length -= 1;
        return e.value;
      }
      return undefined;
    }

    *[Symbol.iterator]() {
      for (var i = 0; i < this.items.length; i++) {
        let x = this.items[i];
        if (x.generation !== undefined) {
          yield { index: new Index(i, x.generation), value: x.value };
        }
      }
    }

    indices() {
      let i = { items: this.items };
      i[Symbol.iterator] = function* iter() {
        for (var i = 0; i < this.items.length; i++) {
          let x = this.items[i];
          if (x.generation !== undefined) {
            yield new Index(i, x.generation);
          }
        }
      };
      return i;
    }

    values() {
      let i = { items: this.items };
      i[Symbol.iterator] = function* iter() {
        for (var i = 0; i < this.items.length; i++) {
          let x = this.items[i];
          if (x.generation !== undefined) {
            yield x.value;
          }
        }
      };
      return i;
    }
  }

  window.JsWasm = {
    createEnvironment() {
      let arena = new GenerationalArena();
      arena.insert(undefined);
      arena.insert(null);
      arena.insert(self);
      arena.insert(typeof document != "undefined" ? document : null);
      arena.insert(typeof document != "undefined" ? document.body : null);
      let context = {
        functions: [
          function(){
            debugger;
          }
        ],
        objects: arena,
        utf8dec: new TextDecoder("utf-8"),
        utf8enc: new TextEncoder("utf-8"),
        utf16dec: new TextDecoder("utf-16"),
        utf16enc: new TextEncoder("utf-16"),
        toCallbackArg: function(arg) {
          if (typeof arg === "object") {
            return context.storeObject(arg);
          }
          return arg;
        },
        createCallback: function(cb) {
          let fnHandleCallback = this.module.instance.exports.handle_callback;
          return function() {
            const arg = arguments;
            fnHandleCallback(
              cb,
              context.toCallbackArg(arg[0]),
              context.toCallbackArg(arg[1]),
              context.toCallbackArg(arg[2]),
              context.toCallbackArg(arg[3]),
              context.toCallbackArg(arg[4]),
              context.toCallbackArg(arg[5]),
              context.toCallbackArg(arg[6]),
              context.toCallbackArg(arg[7]),
              context.toCallbackArg(arg[8]),
              context.toCallbackArg(arg[9])
            );
          };
        },
        readCStringFromMemory: function(start) {
          const data = new Uint8Array(this.module.instance.exports.memory.buffer);
          const str = [];
          let i = start;
          while (data[i] !== 0) {
            str.push(data[i]);
            i++;
          }
          return this.utf8dec.decode(new Uint8Array(str));
        },
        writeCStringToMemory(str) {
          const bytes = this.utf8enc.encode(str + String.fromCharCode(0));
          const len = bytes.length;
          const start = this.module.instance.exports.malloc(len);
          const memory = new Uint8Array(
            this.module.instance.exports.memory.buffer
          );
          memory.set(bytes, start);
          return start;
        },
        readUtf8FromMemory: function(start, len) {
          const memory = new Uint8Array(
            this.module.instance.exports.memory.buffer
          );
          const text = this.utf8dec.decode(memory.subarray(start, start + len));
          return text;
        },
        writeUtf8ToMemory: function(str) {
          const bytes = utf8enc.encode(str);
          const len = bytes.length;
          const start = this.module.instance.exports.malloc(len);
          const memory = new Uint8Array(
            this.module.instance.exports.memory.buffer
          );
          memory.set(bytes, start);
          return start;
        },
        readUtf16FromMemory: function(start, len) {
          const memory = new Uint8Array(
            this.module.instance.exports.memory.buffer
          );
          const text = this.utf16dec.decode(memory.subarray(start, start + len));
          return text;
        },
        writeUtf16ToMemory: function(str) {
          const bytes = utf16enc.encode(str);
          const len = bytes.length;
          const start = this.module.instance.exports.malloc(len);
          const memory = new Uint8Array(
            this.module.instance.exports.memory.buffer
          );
          memory.set(bytes, start);
          return start;
        },
        readUint8ArrayFromMemory(start) {
          const data32 = new Uint32Array(
            this.module.instance.exports.memory.buffer
          );
          const ptr = data32[start / 4];
          const length = data32[ptr / 4];
          let b = mem.slice(ptr + 4, ptr + 4 + length);
          return new Uint8Array(b);
        },
        storeObject: function(obj) {
          const index = this.objects.insert(obj);
          return index.toNum();
        },
        getObject: function(handle) {
          return this.objects.get(Index.fromNum(handle));
        },
        releaseObject: function(handle) {
          this.objects.remove(Index.fromNum(handle));
        }
      };
      return {
        context,
        abort() {
      throw new Error("WebAssembly module aborted");
        },
        js_release(obj) {
          context.releaseObject(obj);
        },
        js_register_function(start, len, utfByteLen) {
          let functionBody;
          if(utfByteLen === 16) {
            functionBody = context.readUtf16FromMemory(start, len);
          } else {
            functionBody = context.readUtf8FromMemory(start, len);
          }
          let id = context.functions.length;
          context.functions.push(
            Function(`"use strict";return(${functionBody})`)()
          );
          return id;
        },
        js_invoke_function(funcHandle, a, b, c, d, e, f, g, h, i, j) {
          return context.functions[funcHandle].call(
            context,
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j
          );
        }
      };
    },

    async load_and_run_wasm(wasmURL) {
      const env = JsWasm.createEnvironment();
      const response = await fetch(wasmURL);
      const bytes = await response.arrayBuffer();
      const module = await WebAssembly.instantiate(bytes, {
        env
      });
      env.context.module = module;
      module.instance.exports.main();
    }
  };

  document.addEventListener("DOMContentLoaded", function() {
    const wasmScripts = document.querySelectorAll(
      "script[type='application/wasm']"
    );
    for (let i = 0; i < wasmScripts.length; i++) {
      const src = wasmScripts[i].src;
      if (src) {
        JsWasm.load_and_run_wasm(src);
      } else {
        console.error("Script tag must have 'src' property.");
      }
    }
  });

  if (window.WasmScriptComponents) {
    window.WasmScriptComponents["js-wasm"] = function(e) {
      return {
        ...e,
        ...JsWasm.createEnvironment()
      };
    };
  }

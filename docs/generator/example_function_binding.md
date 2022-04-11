

```cpp
void BindDrawPixelV(const Napi::CallbackInfo& info, int& index) {
	// create an index variable to index into info[] with
  int index = -1;
  DrawPixelV(
    Vector2FromValue(info, index), // for each function argument, call ${arg.type}FromValue(info, index)
    ColorFromValue(info, index)
  );
	// no return type on this function
}
```

```cpp
Napi::Value BindWindowShouldClose(const Napi::CallbackInfo& info) {
	int index = -1; // unused since no arguments are needed - maybe only conditionally add this line
	return ToValue(info.Env(),
		WindowShouldClose()
	); // if the function is not void, pass  it's result into a ToValue() call
}
```

```cpp
Napi::Object BindLoadTexture(const Napi::CallbackInfo& info) {
	int index = -1;
	return ToValue(info.Env(), 
		LoadTexture(
			StringFromValue(info, index)
		)
	);
}
```
#ifndef NODE_RAYLIB_FILES_H
#define NODE_RAYLIB_FILES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_files(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "LoadFileData", LoadFileData);
  AddFunction(env, exports, "SaveFileData", SaveFileData);
  AddFunction(env, exports, "LoadFileText", LoadFileText);
  AddFunction(env, exports, "SaveFileText", SaveFileText);
  AddFunction(env, exports, "FileExists", FileExists);
  AddFunction(env, exports, "IsFileExtension", IsFileExtension);
  AddFunction(env, exports, "DirectoryExists", DirectoryExists);
  AddFunction(env, exports, "GetExtension", GetExtension);
  AddFunction(env, exports, "GetFileName", GetFileName);
  AddFunction(env, exports, "GetFileNameWithoutExt", GetFileNameWithoutExt);
  AddFunction(env, exports, "GetDirectoryPath", GetDirectoryPath);
  AddFunction(env, exports, "GetPrevDirectoryPath", GetPrevDirectoryPath);
  AddFunction(env, exports, "GetWorkingDirectory", GetWorkingDirectory);
  // AddFunction(env, exports, "GetDirectoryFiles", GetDirectoryFiles);
  AddFunction(env, exports, "ClearDirectoryFiles", ClearDirectoryFiles);
  AddFunction(env, exports, "ChangeDirectory", ChangeDirectory);
  AddFunction(env, exports, "IsFileDropped", IsFileDropped);
  // AddFunction(env, exports, "GetDroppedFiles", GetDroppedFiles);
  AddFunction(env, exports, "ClearDroppedFiles", ClearDroppedFiles);
  AddFunction(env, exports, "GetFileModTime", GetFileModTime);

  AddFunction(env, exports, "CompressData", CompressData);
  AddFunction(env, exports, "DecompressData", DecompressData);

  AddFunction(env, exports, "SaveStorageValue", SaveStorageValue);
  AddFunction(env, exports, "LoadStorageValue", LoadStorageValue);
  AddFunction(env, exports, "OpenURL", OpenURL);
}

#endif

#include <string>
#include <iostream>
#include <raylib.h>

#include "nbind/api.h"

#include "nbind/nbind.h"

//#ifdef NBIND_CLASS

  //method(test);

NBIND_FUNCTION(IsWindowReady);
NBIND_FUNCTION(FileExists);
NBIND_FUNCTION(IsFileExtension);
NBIND_FUNCTION(GetColor);
NBIND_FUNCTION(ColorToInt);


//#endif

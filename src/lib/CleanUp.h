#ifndef NODE_RAYLIB_CLEANUP_H_
#define NODE_RAYLIB_CLEANUP_H_

// cstdlib is used for free()
// http://www.cplusplus.com/reference/cstdlib/free/
#include <cstdlib>

/**
 * Clean up the given value.
 *
 * This is helpful when there is a parameter that requires manual memory cleaning.
 */
template <typename P1>
inline void CleanUp(P1 val) {
  // Do nothing.
  (void)val;
}

/**
 * Clean up the memory for a string.
 */
inline void CleanUp(const char* val) {
  free((char*)val);
}

/**
 * Clean up the memory for a Camera.
 */
inline void CleanUp(Camera* val) {
  delete val;
}

#endif

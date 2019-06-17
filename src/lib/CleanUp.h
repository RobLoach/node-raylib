#ifndef NODE_RAYLIB_CLEANUP_H_
#define NODE_RAYLIB_CLEANUP_H_

// cstdlib is used for free()
// http://www.cplusplus.com/reference/cstdlib/free/
#include <cstdlib>
#include <iostream>

/**
 * Clean up the given value.
 *
 * This is helpful when there is a parameter that requires manual memory cleaning.
 */
template <typename P1>
inline void CleanUp(P1 val) {
  // Do nothing.
}

/**
 * Clean up the memory for a string.
 */
inline void CleanUp(const char* val) {
  free((char*)val);
}

/**
 * Clean up the memory for a string.
 */
inline void CleanUp(Camera* val) {
  std::cout << "CleanUp(camera*)" << std::endl;
  delete val;
}

#endif

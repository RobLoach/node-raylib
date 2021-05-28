# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.8.1] - 2021-05-28
### Fixed
- Include the `vendor` directory in the npm package

## [0.8.0] - 2021-05-17
### Fixed
- Font usage between C and Node.js, reported by [gtrxAC](https://github.com/gtrxAC)
- `LoadXXXXFromMemory()` support through an argument orchestrator for `unsigned char *`
  - By [@eviltreehouse](https://github.com/eviltreehouse) in [#78](https://github.com/RobLoach/node-raylib/pull/78)
- `SetShaderValue*()` functions
  - By [@eviltreehouse](https://github.com/eviltreehouse) in [#83](https://github.com/RobLoach/node-raylib/pull/83)
### Added
- When a resource fails to load, it now returns a `null` object

## [0.7.0] - 2021-01-17
### Changed
- Updated to raylib 3.5.0

## [0.6.0] - 2020-05-07
### Added
- rlgl
- raymath
- `TraceLog()`

### Changed
- Updated to latest raylib
- Updated to `node-addon-api@^3.0.0`

## [0.5.3] - 2020-04-06
### Added
- Brought in raylib as static files rather than using FetchProject

## [0.5.2] - 2020-04-06
### Fixed
- Update enumeration definitions

## [0.5.1] - 2020-04-01
### Fixed
- Add correct LANGUAGES to cmake definition

## [0.5.0] - 2020-04-01
### Added
- `man` documentation
- Update package.json schema
- Update raylib to 3.0.0

## [0.4.1] - 2019-03-24
### Fixed
- Add `index.d.js` to package
- Fixed GCC flags being applied to MSVC by Kniffen

## [0.4.0] - 2019-03-22
### Changed
- Updated to the latest raylib
- GitHub Actions for automated testing

## [0.2.0] - 2019-07-29
### Added
- Music and Sound
- `UpdateCamera()`

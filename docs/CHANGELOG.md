# Changelog
All notable changes to this project will be documented in this file.

## [0.1.4] - 2023-11-22
### Added
- Minified version of library, under `./script/distro/`
- **dev-tools**
  - `Anchor` test cases
  - `Animation` test cases :b: `beta`
  - `_getSpecialVariables ( )` function, to return a code string with special variable formatting
  - `_getCode ( )` function, to return eval ready code for passed card-objects
- `canvasLab` class
  - `animate ( )` function, to animate onscreen objects in accordance with passed param values :b: `beta`
  - Various animations & processing declarations within `#config` :b: `beta`

### Changed
- **dev-tools**, refactored `_cleanCode ( )` & `_setImagePath ( )` functions to streamline operations

### Fixed
- **dev-tools**, refactored `_copyCode ( )` function, to include `info-circle.svg`

## [0.1.2] - 2023-10-27
### Added
- Object
  - `Circle` class, for circular objects
  - `Line` class, for linear objects
  - `Rectangle` class, for rectangular objects
  - `Text` class, for textual objects

- Subject
  - `Anchor` class, for anchoring objects
  - `Angle` class, for angle properties
  - `Aspect` class, for aspect properties
  - `ControlPoints` class, for bezier curve properties
  - `Fill` class, for fill properties
  - `Font` class, for base font properties
  - `Options` class, for grouped option properties
  - `Point` class, for X & Y coordinate properties
  - `Shadow` class, for shadow properties
  - `Stroke` class, for stroke properties

- Collection
  - `Circles` class, an array class to group circular objects :b: `beta`
  - `Lines` class, an array class to group linear objects :b: `beta`
  - `Rectangles` class, an array class to group rectangular objects :b: `beta`
  - `Texts` class, an array class to group textual objects :b: `beta`
  - `Group` class, an array class to group any and all object type :b: `beta`
  - `OptionsCollection` class, an array class to group option properties :b: `beta`
  - `PointCollection` class, an array class to group point properties :b: `beta`
  - `ShadowCollection` class, an array class to group shadow properties :b: `beta`
  - `StrokeCollection` class, an array class to group stroke properties :b: `beta`

### Changed
- refactored **dev-tools** ui appearance & operation

## [0.0.2] - 2023-10-13
### Added
- Class icons for **dev-tools** interface; .afdesign & .svg
- **PlantUml** folder output for class UML structures

### Changed
- **tests** renamed to **dev-tools**
- refined **dev-tools** ui appearance & operation

## [0.0.1] - 2023-10-05
### Added
- **build** tools and assets
- **tests** ui, tools, and assets
- `Application` class, for core application duties
- `canvasLab` class, for general canvas duties
- `PROPERTY_BLOCKS` module, for shared accessors & mutators
- `UTILITIES` module, for shared utility functions
- `VALIDATION` module, for shared validation functions
- `DEBUG` module, for general debug cases

## [0.0.0] - 2023-10-02
### Added
- Directory structure
- CHANGELOG.md
- README.md

---

| Version | Date       | Commit                                                              | Comments                                                                                     |
| :-----: | :--------: | :-----------------------------------------------------------------: | :------------------------------------------------------------------------------------------- |
| [0.1.4] | 2023-10-27 | CURRENT                                                             | Added foundation for animations.                                                             |
| [0.1.2] | 2023-10-27 | [6008fb1](https://github.com/Justin-Byrne/canvasLab/commit/6008fb1) | Added object, subject, & collection classes. 												                        |
| [0.0.2] | 2023-10-13 | [981cdf8](https://github.com/Justin-Byrne/canvasLab/commit/981cdf8) | Added additional resources & visuals to dev-tools UI. 										                    |
| [0.0.1] | 2023-10-05 | [5bd2683](https://github.com/Justin-Byrne/canvasLab/commit/5bd2683) | Included general build & testing tools, with core classes & modules.                         |
| [0.0.0] | 2023-10-02 | [5131349](https://github.com/Justin-Byrne/canvasLab/commit/5131349) | Initial upload.                                                                              |

---

## Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/canvasLab/blob/main/images/cube_sm.png)

==Byrne-Systems © 2023 - All rights reserved.==

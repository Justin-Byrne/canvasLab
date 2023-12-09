# Changelog
All notable changes to this project will be documented in this file.

## [0.1.7] - 2023-12-08
### Added
- **dev-tools**
  - Showdown.js, to render markdown within the DOM; for JSDocs
  - Implemented preset timing (easing functions) selection for animations
  - `_cardTemplateBlank ( )` function, to return a blank HTML card template
  - `_trimExtraImageTags ( )` function, to trim left over image tags from the card template; @see _cardTemplate
  - `_createEasingLinks ( )` function, to create easing links for animation cards
  - `_embedEasingLinks ( )` function, to embed easing links for each animation card
  - `_toggleEasingFunctions ( )` function, to toggle visibility of easing functions
  - `_setEasingAnimation ( )` function, to set easing animation for an animation card
  - `_setAddCardEventListener ( )` function, to set additional card event listener
  - `_setOffCanvasDocument ( )` function, to set markdown content for the offCanvas element

### Changed
- **dev-tools**, changed `_2digit ( )` to `_number2String ( )`

## [0.1.6] - 2023-12-01
### Added
- **dev-tools**
  - `_toggleBottomLinks ( )` function, toggle opacity from bottom links in navigation area
  - `_setMaster ( )` function, to set the master classes properties
  - `_getClass ( )` function, to return the likely class name for the passed code
- `Processing` class, to handle pre & post processing

### Changed
- **dev-tools**,
  - Split `_setNavEventListeners ( )` to
    - `_setNavMainEventListeners ( )` function, to set navigation main event listeners
    - `_setNavLinkEventListeners ( )` function, to set navigation link event listeners
  - General UI
    - Bottom links
    - Extra off-canvas links

## [0.1.5] - 2023-11-26
### Added
- `Animation` class, added mutators & accessors for properties
- `Application` class, added caching of animation instances

### Changed
- **dev-tools** navigation to include specific drop-down lists for `Handlers`
- `Animation` class
  - Migrated all easing animations from `canvasLab` class to protected `#timing` property
  - Core `animate ( )` function is now here, rather than `canvasLab`

## [0.1.4] - 2023-11-22
### Added
- Minified version of library, under `./script/distro/`
- **dev-tools**
  - `Anchor` test cases
  - `Animation` test cases :b: `beta`
  - `_getSpecialVariables ( )` function, to return a code string with special variable formatting
  - `_getCode ( )` function, to return eval ready code for passed card-objects
- `canvasLab` class, `animate ( )` function, to animate onscreen objects in accordance with passed param values :b: `beta`
- `Animation` class, various pre-defined animations & processing declarations within `#config` :b: `beta`

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
| [0.1.7] | 2023-12-08 | CURRENT                                                             | Implemented preset timing (easing functions) selection for animations.                       |
| [0.1.6] | 2023-12-01 | [cc4f730](https://github.com/Justin-Byrne/canvasLab/commit/cc4f730) | Added & refactored various front & back-end features for dev-tools.                          |
| [0.1.5] | 2023-11-26 | [db2c514](https://github.com/Justin-Byrne/canvasLab/commit/db2c514) | Refactored animation functions & expanded dev-tools navigation.                              |
| [0.1.4] | 2023-11-22 | [0e9813f](https://github.com/Justin-Byrne/canvasLab/commit/0e9813f) | Added foundation for animations.                                                             |
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

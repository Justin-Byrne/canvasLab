# Changelog
All notable changes to this project will be documented in this file.

## [0.4.88] - 2024-07-12
### Added
- **devSuite**
  - `Tool` class, `isCanvasLabCollection ( )` to determine whether the passed value is an 'Object' canvasLab category
  - `Ui` class
    - `toggle._collapsibles ( )` to toggle collapsible nav-menu menu items
    - `_collapseButtonsExcept ( )` to collapse all passed buttons, outside of index passed

- **canvasLab**
  - `PROPERTY_BLOCKS` module
    - `combined` ↴
      - `anchor` mutator & accessor
      - `area` accessor
      - `aspect` accessor
      - `aspectWidth` accessor
      - `aspectHeight` accessor
      - `endPoint` accessor
      - `perimeter` accessor
  - `UTILITITES` module
    - `collection` ↴
      - `draw ( )` draw function
      - `redraw ( )` redraw function
      - `drawAnchor ( )` to draw anchor point
      - `drawOptionsPost ( )` to draw associated options
      - `push ( )` to push child object(s) into this collection
      - `setAnchorPoint ( )` to set anchor's point against this object's point location
      - `setPointOffset ( )` to set offset of child object against this constructor's point
    - `misc.showCoordinates ( )` to show coordinates of this object
    - `transition` ↴
      - `move ( ) ` to move this object
      - `rotate ( )` to rotate this object
  - `Aspect` class, `#offset` property and accessor

### Changed
- **canvasLab**
  - `ancillary` folder to `components`

### Removed
- **devSuite**
  - `Ui` class
    - `_checkCollapsible ( )`
    - `_collapseButtons ( )`

- **canvasLab**
  - `PROPERTY_BLOCKS` module
  - `UTILITITES` module
    - `draw.collection.twoDimensional ( )`
    - `draw.collection.oneDimensional ( )`
  - `Processing` class

### Refactored
- **devSuite**
  - `Template` class
    - `_initializer.object` to include collections; `Lines`, `Circles`, `Rectangles`, `Texts`, and `Group`
    - `_getCodeTemplate ( )`, to include collections: `Lines`, `Circles`, `Rectangles`, `Texts`, and `Group`
  - `Ui` class, `getClass ( )` to include collections: `Lines`, `Circles`, `Rectangles`, `Texts`, and `Group`

- **canvasLab**
  - `Circle` class
  - `Circles` class
  - `Line` class
  - `Lines` class
  - `Text` class
  - `Texts` class
  - `Rectangle` class
  - `Rectangles` class
  - `Group` class

## [0.3.78] - 2024-07-01
### Added
- **devSuite**
  - `Lab` class, `clearConsole` case to `_setEventListeners ( )`, to toggle lab *clear console* feature
  - `Tool` class, added Collection objects to `isCanvasLabObject ( )`
  - `Ui` class, `toggle.boolean ( )`, to toggle boolean value in lab

- **canvasLab**
  - `PROPERTY_BLOCKS` module, `discrete.alpha ( )` mutators
  - `VALIDATION` module, `isPlan ( )`, to returns whether the passed value is a Plan
  - `Circles`, `Lines`, `Rectangles`, and `Texts` classes,
    - `endPoint ( )` to return the last Point within this Array
    - `redraw ( )` to redraw this object
  - `Group` class, an array class to group any and all object type
  - `SacredCircles` class, Group Plan

### Removed
- **canvasLab**
  - `Line` class, `fillColorCycle ( )`

### Changed
- **canvasLab**
  - `UTILITIES`, `draw.collection.typical ( )` to `draw.collection.twoDimensional ( )` & `draw.collection.aTypical ( )` to `draw.collection.oneDimensional ( )`

### Fixed
- **canvasLab**
  - `UTILITIES`, `draw.axis ( )` where axis doesn't display

## [0.3.67] - 2024-06-10
### Added
- **devSuite**
  - `main`, added `_scripts` object; to contain various loadable lab scripts
  - `Lab` class
    - `_setMenuPopups ( )` to set the lab's menu items in relation to internal scripts
    - `_getMenuPopup ( )` to get menu popup item with the passed 'element' param
  - `Ui` class, `_adjustGridCenter ( )` to adjust the center of the grid; temporary fix.
- **canvasLab**
  - `Application` class, `_center ( )` to return center ( x & y coordinates ) for the present window
  - `Queue` class

### Removed
- **devSuite**
  - `Lab` class, `_scripts` object

### Refactored
- **canvasLab**
  - `PROPERTY_BLOCKS`, `discrete.point` mutators
  - `move ( )` function, within `Circle`, `Line`, `Rectangle`, and `Text` classes

## [0.3.59] - 2024-06-03
### Added
- **devSuite**
  - `Tool` class, `isActive ( )` to determine whether the passed element is active
  - `Ui` class
    - `_toggle.labButton ( )` to toggle lab buttons active state
    - `_toggle.labMenu ( )` to toggle visibility of lab menu
    - `_toggle.grid ( )` to toggle grid in lab
    - `_toggle.ruler ( )` to toggle ruler in lab
  - `Lab` class
    - `_scripts` object, to contain various loadable lab scripts
    - `_setMenuPopup ( )` to set the lab's menu items in relation to internal scripts
    - `_setGrid ( )` to set grid's horizontal & vertical lines
    - `loadScript ( )` to load a script within ace-editor
    - `runCode ( )` to execute lab code from editor

### Refactored
- `Lab` class, refactored `init ( )`, `_cleanCode ( )`

## [0.3.55] - 2024-05-29
### Added
- **devSuite**
  - `Tool` class
    - `_get.numberFromPx ( )` to return CSS pixel value as number
    - `_get.fontSize ( )` to return CSS font size of HTML element
    - `_get.textMinHeight ( )` to return the minimum height of a text element
    - `_incrementFontSize ( )` to increment font size by 1px
    - `scaleText ( )` to adjust group of element font-sizes, with that groups min font-size

### Refactored
- **devSuite**
  - `Ui` class, refactored `externalLinks ( )`, `toggle._documentation ( )`, `toggle._navDropdown ( )`

## [0.3.54] - 2024-05-26
### Added
- **devSuite**
  - `Template` class
    - `_setImagePaths ( )` to set image paths for each card-object passed through the param
    - `_getImages ( )` to return a template with the appropriate canvasLab images embedded

### Changed
- **devSuite**
  - `Page` class, changed `subgroup` property to `handler`

### Refactored
- **devSuite**
  - `Tool` class, `copyObjectWithKey ( )` to better incorporate handlers
  - `Ui` class, `_cardPlus ( )` to better incorporate handlers

### Removed
- `Ui` class, `clean.imageTags ( )` & `_setImagePath ( )` functions

## [0.3.48] - 2024-05-10
### Added
- **canvasLab**
  - `Linear` class, for Linear gradient objects
  - `Radial` class, for Radial gradient objects
  - `Conic` class, for Conic gradient objects
  - `Stop` class, for Stop gradient objects
  - `UTILITIES` module
    - `strokeColorCycle ( )` to cycle colors for stroke
    - `fillColorCycle ( )` to cycle colors for fill
    - `gradientColorCycle ( )` to cycle colors for gradient
    - `_stopColorCycle ( )` to cycle colors for gradient stop(s)
    - `set.fillType ( )` to set fill type of the associated object
  - `VALIDATION` module
    - `isAngle ( )` to return whether the passed value is an angle
    - `isGradient ( )` to return whether the passed value is a gradient
  - `Rgb` class
    - `_lerp ( )` function, for linear interpolation color transitions
    - `_lerpRgb ( )` function, for linear interpolation of Rgb values
    - `_cycle ( )` function, for color cycling
  - `Line` class, added `strokeColorCycle ( )`
  - `Circle` class, added `strokeColorCycle ( )`, `fillColorCycle ( )`, & `gradientColorCycle ( )`
  - `Rectangle` class, added `strokeColorCycle ( )`, `fillColorCycle ( )`, & `gradientColorCycle ( )`
  - `Text` class, added `strokeColorCycle ( )` & `fillColorCycle ( )`
- **devSuite**
  - `Tool` class, added `isCanvasLabObject` returns whether the passed value is an 'Object' canvasLab category

### Changed
- **canvasLab**
  - `VALIDATION` module, `isColorStop ( )` to `isStop ( )`

## [0.3.30] - 2024-05-02
### Added
- **devSuite**
  - **`Ui`**
    - `toggle._navDropdown ( )` to toggles drop-down navigation menu
    - `setNavLinks ( )` to set navigation links
    - `_setCards ( )` to set cards
    - `_getButton ( )` to return a button for navigation links
    - `_getLink ( )` to return a link for navigation links

### Removed
- **devSuite**
  - Removed `navMainLinks` & `navPageLinks` cases from `UI._setEventListeners ( )`

## [0.3.25] - 2024-05-02
### Added
- **canvasLab**
  - `Rgb` class, for RGB color model
  - `Hsl` class, for HSL color model
  - `Hwb` class, for HWB color model
  - `PropertyBlocks.discrete.alpha ( )` function for alpha setters
  - **`Validation`**
    - `is256 ( )` to return whether the passed value is a 256 value color integer
    - `isColorModel ( )` to return whether the passed value is a color model
    - `isColorStop ( )` to return whether the passed value is a color stop
    - `isDecimal ( )` to return whether the passed value is a decimal
    - `isStrokeType ( )` to return whether the passed value is a stroke type
- **devSuite**
  - **`Ui`**
    - `toggle._cardPlus ( )` to add an additional card to cardObjects; mirroring the last card present
    - `toggle._cardClose ( )` to subtract the last card from cardObjects
    - `clean.blankCards ( )` to cleans the remaining '.blank' cards while converting the first to a '.plus' card

### Refactored
- **canvasLab**
  - `UTILITIES` module
    - `draw.axis ( )` utility function
    - `draw.border ( )` utility function
    - `set.shadow ( )` setter
  - `VALIDATION` module
    - `isAspect ( )` function
    - `isCanvasLabObject ( )` function
  - `Stroke`, `Fill`, `Circle`, `Line`, `Rectangle`, `Text`, `ShadowCollection`, & `ShadowCollection` to incorporate new color model classes
- **devSuite**
  - `Lab` class
    - `_getBoundingCharactersPositions ( )` utility function
    - `_swapRgbValue ( )` utility function
  - `Template` class
    - `standard` property
    - `blank` property
  - `Ui` class
    - `toggle.cardButton ( )` utility function
    - `toggle._modalCode ( )` utility function
    - `_setCardsSection ( )` utility function

### Changed
- **canvasLab**
  - `VALIDATION` module
    - `isArrayNumberic ( )` to `isArrayNumeric ( )`

### Removed
- **canvasLab**
  - `VALIDATION` module
    - `isRgb ( )`
    - `isType ( )`
- **devSuite**
  - `cardPlus` & `cardPlus` cases removed from `Ui._setEventListeners ( )`


## [0.2.17] - 2024-04-26
### Fixed
- Fix unintentional recursive calls within the `Ui` class

### Changed
- Refactored the standard class within the `Template` class
- Changed the following public functions to private
  - `Ui.modalCode ( )` to `Ui._modalCode ( )`
  - `Ui.documentation ( )` to `Ui._documentation ( )`
  - `Ui.easingFunctions ( )` to `Ui._easingFunctions ( )`

### Added
- New Audio sounds at lower bitrate
- **devSuite**
  - `Log` class, for basic log entries
- Added `Ui.cardButton ( )` function, to toggle the card button associated with the passed 'event' param
- Added `devSuite.toggleCardButton ( )` to `main.js`

### Removed
- Removed 'href' property from the `Page` class
- Removed 'modal' case from `Ui._setEventListeners ( )`
- Removed `Ui._isCardIcon ( )`
- Removed `devSuite.toggleEasingFunctions ( )` & `devSuite.setOffCanvasDocument ( )` from `main.js`

## [0.2.11] - 2024-04-22
### Changed
- **dev-tools** to **devSuite**
- Updated UI

### Added
- **devSuite**
  - `Template` class, for HTML card templates for UI
  - `Page` class, for parsing page types
  - `Tool` class, for general helpers
  - `Ui` class, for user interface
  - `Lab` class, for Lab with ace-editor

## [0.1.11] - 2024-04-03
### Changed
- **dev-tools**
  - renamed functions
    - `_cardTemplate ( )` to `_cardTemplateStandard ( )`
    - `_cardTemplateBlank ( )` to `_cardTemplateExtra ( )`
    - `_setModalEventListener ( )` to `_setModalViewEventListener ( )`
    - `_setDefaultPage ( )` to `_setEnvironment ( )`

### Added
- **dev-tools**
  - `_isNavOpen ( )` function, to return whether the navigation bar is open
  - `_scaleNav ( )` function, to scale navigation area to open or closed state
  - `_setNavScalerEventListener ( )` function, to set navigation scaler event listener
  - `_getCardColumnCount ( )` function, to return the amount of columns available per the present resolution
  - `_getCardExtraCount ( )` function, to return the amount of extra cards to embed
  - `_getCardExtras ( )` function, to return an Array of extra HTML templates; to align cards
  - `_getCards ( )` function, to return an Array of standard & extra HTML templates for each card-object
  - `_toTitleCaseCustom ( )` function, to convert string to title case; with exceptions

## [0.1.10] - 2023-12-27
### Added
- **dev-tools**
  - `_toggleNavigation ( )` function, to toggle navigation element
  - `_toggleFullscreen ( )` function, to toggle fullscreen
  - `_setLabStationSidebarEventListener ( )` function, to set lab-station sidebar event listener
  - `_setLabStationFullscreenEventListener ( )` function, to set lab-station full-screen event listener
  - `_setFontSize ( )` function, to set the font size within ace-editor

## [0.1.9] - 2023-12-26
### Added
- **dev-tools**
  - `_increment ( )` function, to increment the value passed up (+) or down (-)
  - `_padZeros ( )` function, pad a string with a specified amount of zeros
  - `_replaceRange ( )` function, to replace a specific substring position of a string
  - `_cleanAceCode ( )` function, to clean code of enumerators for ace-editor
  - `_incrementLabStationValue ( )` function, to increment a numeric selection from ace-editor up or down
  - `_getBoundingCharactersPositions ( )` function, to return positions of bounding characters
  - `_swapLabStationsRgbValue ( )` function, to swap rgb values between color-picker and ace-editor
  - `_setHotkey ( )` function, to set user's hotkeys
  - `_setHotkeys ( )` function, to set hotkeys for UI
  - `_setColorPickerPosition ( )` function, to set color-picker's position
  - `_setLabStationColorPickerEventListener ( )` function, to set lab-station color-picker event listener
  - `_setLabStationValuePlusEventListener ( )` function, to set lab-station font plus event listener
  - `_setLabStationValueMinusEventListener ( )` function, to set lab-station value minus event listener
  - `_getColorPicker ( )` function, to return a new color-picker object

### Changed
- **dev-tools**, moved `_alert ( )` from an encapsulated function, to generic functions

## [0.1.8] - 2023-12-18
### Added
- **dev-tools**
  - `_initializerObject` object, containing class initializers available through bracket notation
  - `_removeFadeInAnimations ( )` function, to remove .fade-in class from pre-existing cards
  - `_runLabStationCode ( )` function, to execute lab station code from editor
  - `_download ( )` function, to generate a downloadable file & initiates that download
  - `_setAceEditor ( )` function, to set ace editor
  - `_setLabStationCanvasSize ( )` function, to set the lab station canvas & ruler dimensions
  - `_setMinusCardEventListener ( )` function, to set subtractive card event listener
  - `_setLabStationCanvasEventListener ( )` function, to set lab station canvas event listener
  - `_setLabStationOutputEventListeners ( )` function, to set lab station output event listener
  - `_setLabStationFontPlusEventListener ( )` function, to set lab station font plus event listener
  - `_setLabStationFontMinusEventListener ( )` function, to set lab station font minus event listener
  - `_setLabStationWordWrapEventListener ( )` function, to sets lab station word-wrap event listener
  - `_setLabStationLockEventListener ( )` function, to set lab station lock event listener
  - `_setLabStationDownloadEventListener ( )` function, to set lab station download event listener
  - `_setLabStationEventListeners ( )` function, to set all lab station event listeners

### Changed
- **dev-tools**, changed `_clearCards ( )` to `_clearScreen ( )` function, to clear screen prior to rebuilding

### Removed
- **dev-tools**, removed `_getClassInitializer ( )`, and replaced with `_initializerObject` object

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

| Version  | Date       | Commit                                                              | Comments                                                                                     |
| :------: | :--------: | :-----------------------------------------------------------------: | :------------------------------------------------------------------------------------------- |
| [0.4.88] | 2024-07-12 | CURRENT                                                             | Added collection classes, & major refactoring of PROPERTY_BLOCKS & UTILITIES.                |
| [0.3.78] | 2024-07-01 | [62b10b3](https://github.com/Justin-Byrne/canvasLab/commit/62b10b3) | Fixed UTILITIES.draw.axis, and added boolean toggle & clear console feature(s) to lab.       |
| [0.3.67] | 2024-06-11 | [2a1cc1b](https://github.com/Justin-Byrne/canvasLab/commit/2a1cc1b) | Implemented Queue class, general cleanup & refactoring.                                      |
| [0.3.59] | 2024-06-03 | [5d1df4a](https://github.com/Justin-Byrne/canvasLab/commit/5d1df4a) | Implemented various lab-station features.                                                    |
| [0.3.55] | 2024-05-29 | [d9ba544](https://github.com/Justin-Byrne/canvasLab/commit/d9ba544) | Refactored in app (devSuite) documentation.                                                  |
| [0.3.54] | 2024-05-26 | [fd05d82](https://github.com/Justin-Byrne/canvasLab/commit/fd05d82) | Added child class accessibility nodes to devSuite.                                           |
| [0.3.48] | 2024-05-10 | [0032dc5](https://github.com/Justin-Byrne/canvasLab/commit/0032dc5) | Added gradient classes, expanded upon UTILITIES & VALIDATION modules.                        |
| [0.3.30] | 2024-05-06 | [a4b29b5](https://github.com/Justin-Byrne/canvasLab/commit/a4b29b5) | Refactored navigation links as self generative.                                              |
| [0.3.25] | 2024-05-02 | [80ece25](https://github.com/Justin-Byrne/canvasLab/commit/80ece25) | Added color models, and general cleanup.                                                     |
| [0.2.17] | 2024-04-26 | [be58a6e](https://github.com/Justin-Byrne/canvasLab/commit/be58a6e) | Fixed unintentional recursive calls & minor refactoring for UI, Page, & Template classes.    |
| [0.2.11] | 2024-04-22 | [671c1da](https://github.com/Justin-Byrne/canvasLab/commit/671c1da) | Refactored dev-tools (devSuite) into independent classes & updated UI.                       |
| [0.1.11] | 2024-04-03 | [6df392e](https://github.com/Justin-Byrne/canvasLab/commit/6df392e) | Implemented dev-tools navigation toggle & refactored RWD for mobile devices.                 |
| [0.1.10] | 2023-12-27 | [3ccf9b4](https://github.com/Justin-Byrne/canvasLab/commit/3ccf9b4) | Implemented lab-station full-screen & navigation toggles.                                    |
| [0.1.9]  | 2023-12-26 | [c694fb6](https://github.com/Justin-Byrne/canvasLab/commit/c694fb6) | Implemented UI enhancements & color-picker for ace-editor.                                   |
| [0.1.8]  | 2023-12-18 | [766c4ae](https://github.com/Justin-Byrne/canvasLab/commit/766c4ae) | Implemented lab station, ace9, & script editor.                                              |
| [0.1.7]  | 2023-12-08 | [1b28ce8](https://github.com/Justin-Byrne/canvasLab/commit/1b28ce8) | Implemented preset timing (easing functions) selection for animations.                       |
| [0.1.6]  | 2023-12-01 | [cc4f730](https://github.com/Justin-Byrne/canvasLab/commit/cc4f730) | Added & refactored various front & back-end features for dev-tools.                          |
| [0.1.5]  | 2023-11-26 | [db2c514](https://github.com/Justin-Byrne/canvasLab/commit/db2c514) | Refactored animation functions & expanded dev-tools navigation.                              |
| [0.1.4]  | 2023-11-22 | [0e9813f](https://github.com/Justin-Byrne/canvasLab/commit/0e9813f) | Added foundation for animations.                                                             |
| [0.1.2]  | 2023-10-27 | [6008fb1](https://github.com/Justin-Byrne/canvasLab/commit/6008fb1) | Added object, subject, & collection classes. 												                         |
| [0.0.2]  | 2023-10-13 | [981cdf8](https://github.com/Justin-Byrne/canvasLab/commit/981cdf8) | Added additional resources & visuals to dev-tools UI. 										                   |
| [0.0.1]  | 2023-10-05 | [5bd2683](https://github.com/Justin-Byrne/canvasLab/commit/5bd2683) | Included general build & testing tools, with core classes & modules.                         |
| [0.0.0]  | 2023-10-02 | [5131349](https://github.com/Justin-Byrne/canvasLab/commit/5131349) | Initial upload.                                                                              |

---

## Types of changes
- `Added` for new features.
- `Refactored` for changes in existing functionality.
- `Changed` refactored with changes to function calls, names, or placement.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/canvasLab/blob/main/images/cube_sm.png)

==Byrne-Systems © 2023 - All rights reserved.==

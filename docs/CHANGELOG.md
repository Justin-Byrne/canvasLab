# Changelog
All notable changes to this project will be documented in this file.

## [0.7.210] - 2024-11-20
### Added
- **canvasLab**
  - :sunny: `mass` property, to `Circle`, `Ellipse`, `Rectangle`, `RoundedRectangle`, `Text` & `cImage` classes
  - :sunny: `bounds` property, to `Line` class
  - :sunny: `Range` class, for range input objects

## [0.7.207] - 2024-11-15
### Added
- **canvasLab**
  - :sunny: `velocity` property, to `Circle`, `Ellipse`, `Rectangle`, `RoundedRectangle`, `Text` & `cImage` classes
  - :sunny: `Circle` class, `bounds` getter, to get bounds of object
  - :sunny: `Line` class, `point` property
  - :sunny: `Anchor` class, supplemented `_isPoint` function with `VALIDATION.isPoint`

### Changed
- **canvasLab**
  - :full_moon: `_anchor` property, to `#anchor` property, for `Circle`, `Ellipse`, `Rectangle`, `RoundedRectangle` & `cImage`

### Refactored
- **canvasLab**
  - :last_quarter_moon: `UTILITIES.set.anchorPoint` to point to `this.anchor` instead of `this._anchor`

## [0.7.201] - 2024-11-07
### Added
- **canvasLab**
  - :sunny: `Circle`, `Rectangle`, & `Text` classes, supplemented `_isStroke` & `_isFill` functions with `VALIDATION.isStroke` & `VALIDATION.isFill`.
  - :sunny: `Line` class, supplemented `_isStroke` function with `VALIDATION.isStroke`
  - :sunny: `myTransitions` class,
    - `_getNewObjectFromType` function, to return a new object based on the passed clClass, mirroring properties from the passed object
    - `_getShapeObjectData` function, to return an array of new objects & changes created from the collection
    - `_getShapeLineData` function, to return an array of lines & changes linking the objects & collections together

### Refactored
- **canvasLab**
  - :last_quarter_moon: `myTransitions` class, `_shape` function, for a clearer separation of duties

### Fixed
- **canvasLab**
  - :dragon: `SacredCircles` class, fixed `strokes` & `fills` setters to appropriately parse their respective object types

## [0.7.196] - 2024-10-24
### Added
- **canvasLab**
  - :sunny: `Animations` class, `_setPositionData` function, `pointFrom` case to animation from a specified point
  - :sunny: `myTransitions` class, for developer defined animation transitions
  - :sunny: `Circles`, `Lines`, `Rectangles`, & `Texts` classes, supplemented `getPoints` function, with `UTILITIES.collection.getPoints`
  - :sunny: `Circles` class, supplemented `_isDegree` function, with `VALIDATION.isDegree`
  - :sunny: `Position` class, `stroke` & `fill` properties, accessors & mutators
  - :sunny: `UTILITIES` module, `collection.getPoints` function, to get all or specific points throughout this collection
  - :sunny: `VALIDATION` module,`isTransition` function, to return whether the passed value is a Transition
  - :sunny: `PROPERTY_BLOCKS` module,
    - `individual.template` mutator & accessor
    - `individual.transitions` mutator & accessor

- **devSuite**
  - :sunny: `Lab` class,
    - `_setMenuScriptTitle` function, to set the title of the current script being used within the lab environment
    - `_setTimingPopup` function, to set the timing's menu items
    - `_swapValue` function, to swap rgb values between color-picker and ace-editor
    - `_resetLabControl` function, to reset lab control by toggling off & on that control
  - :sunny: `Template` class,
    - `_cleanCountDuplicates` function, to clean count duplicates (i.e. `_00_00...` to `_00`)
    - `_matchVariables` function, to match variables via the passed lines & regex params

### Refactored
- **canvasLab**
  - :last_quarter_moon: `Animation` & `Animations` classes, `_cacheObject` function, cached objects are more specifically declared

- **devSuite**
  - :last_quarter_moon: `Lab` class, `_getBoundingCharactersPositions` function, optimized to obtain a more exact bounding character reference
  - :last_quarter_moon: `Ui` class, `_toggle.labButton` function, optimized to toggle element buttons more specifically
  - :last_quarter_moon: `Template` class, `_modifyTemplateCode` function, optimized by encapsulating variable matching logic within the `_matchVariables` function

### Removed
- **devSuite**
  - :pick: `Lab` class, `_swapRgbValue` & `_setColorPickerPosition` functions

### Fixed
- **canvasLab**
  - :dragon: `Group` class, `canvas` setter, fixed `object.canvas` assignment from accepting improper `value` parameter to proper `this.canvas` property
  - :dragon: `Animation` & `Animations` class, `_transition` function, `radius` case, normalized progress to negate negative values

## [0.7.179] - 2024-09-27
### Added
- **canvasLab**
  - :sunny: `Line` class
    - `anchor` property, accessor(s) & mutator(s)
    - `_drawAnchor` function, to draw anchor points
    - `_setAnchorPoint` function, to set anchor's point
    - `rotate` function, to rotate this object
  - :sunny: `Position` class,
    - `start`, `end`, `rotation`, `aspect`, `controlPoints`, & `fontSize`  properties; accessor(s) & mutator(s)
    - `_isAspect`, `_isBlur`, `_isControlPoint`, `_isNumber`, `_isWidth`, & `_isHeight` validation functions
  - :sunny: `ControlPoints` class, `points` property, accessor(s) & mutator(s)
  - :sunny: `Animation` class,
    - `_resetCanvasTransform` function, to reset the canvas transform; from rotational transforms
    - `rotate`, `aspect`, `controlPoints`, `fontSize`, `angleStart`, `angleEnd` cases to `_setPositionData` & `_transition` functions
  - :sunny: `VALIDATION` module, `isControlPoint` function, to return whether the passed value is an array of Control Point values

- **devSuite**
  - :sunny: `Ui` class,
    - `lab-links` case, to `_setEventListeners` for modal lab link
    - `navButtons-toggle` case, to toggle object & subject navigation buttons
    - `_twoButtons` function, to toggle between two buttons in the navigation tree

## [0.7.173] - 2024-09-18
### Added
- **canvasLab**
  - :sunny: `Line` class, added `point` property, accessor(s) & mutator(s)
  - :sunny: `Position` class, added `rotation` property, accessor(s) & mutator(s)
  - :sunny: `Text` class, added `_setFillType` function from `UTILITIES` module
  - :sunny: `cImage` class, `_drawImage` function, to draw image depending on primary & secondary property settings
  - :sunny: `Animation` class, `startPoint` & `endPoint` cases to `_setPositionData` & `_transition` functions

- **devSuite**
  - :sunny: `Lab` class,
    - `_getAngle` function, to get angle from two points
    - `_getDistance` function, to get distance between two points
    - `_copyToClipboard` function, to copy passed contents to clipboard
    - `_rotatePoint` function, to rotate the origin point by the degree & distance passed
    - `setLabDefaults` function, to set lab default options
    - `setAngle` function, to set angle overlay
    - `setCoordinates` function, to set coordinates overlay
    - `click` case for `_setEventListeners`, to handle angle & coordinates event handling
  - :sunny: `Ui` class,
    - `angle` function, toggles angle in lab
    - `coordinates` function, toggles coordinates in lab

### Refactored
- **canvasLab**
  - :last_quarter_moon: `cImage` class, `draw` function to adapt to regular calls & `Animation` class calls
  - :last_quarter_moon: `Angle` class, `_convert2Degree` modified formula to provide more accurate result

- **devSuite**
  - :last_quarter_moon: `Ui` class, `fullscreen` & `navigation` function(s), to handle **angle** & **coordinates** features while toggling

## [0.7.163] - 2024-09-10
### Added
- **canvasLab**
  - :sunny: `Animations` class, to handling the drawing of multiple objects in one instance

### Refactored
- **canvasLab**
  - :last_quarter_moon: `Application` class, `animation` setter, to include new `Animations` class
  - :last_quarter_moon: `Animation` & `Animations` classes,
    - supplemented `cache` mutator & accessor with `PROPERTY_BLOCKS.animation.cache`
    - supplemented `cancel` mutator & accessor with `PROPERTY_BLOCKS.animation.cancel`
    - supplemented `period` mutator & accessor with `PROPERTY_BLOCKS.animation.period`
    - supplemented `queue` mutator & accessor with `PROPERTY_BLOCKS.animation.queue`
    - supplemented `_end` function, with `UTILITIES.animation.end`
    - supplemented `_getInvertedAngle` function, with `UTILITIES.animation.getInvertedAngle`

### Removed
- **canvasLab**
  - :pick: `Animation` class, `_getAnimationProperties` function

### Fixed
- **canvasLab**
  - :dragon: Inverted 360 degree rotation results; resulting in 90 degrees depicting up rather than down
    - `Animation` class, `_getPointByDegreeNDistance` function
    - `Animations` class, `_getPointByDegreeNDistance` function
    - `UTILITIES` module, `misc.rotatePoint` function
    - `SacredCircles` class, `degrees` property

## [0.7.158] - 2024-08-30
### Added
- **canvasLab**
  - :sunny: `Animation` class,
    - `_cache` function, to cache current object
    - `_end` function, to end animation
    - `cancel` function, to cancel animation
    - `active` property, to identify animations active state
  - :sunny: `Application` class, added `animation` property

- **devSuite**
  - :sunny: `Lab` class, `_clearExistingAnimations` function, to clear existing animations

### Changed
- **canvasLab**
  - :full_moon: Changed `Location` class, to `Position` class; with the same properties

### Refactored
- **canvasLab**
  - :last_quarter_moon: `Animation` class,
    - `_cacheObject` function, substituted param for internal property
    - `animate` function, organized inline logic unto functions their respective functions
  - :last_quarter_moon: `CanvasLab` class, exposed `application` property

### Fixed
- **canvasLab**
  - :dragon: `Animation` class, exposed a `cancel` function to cancel current animations

## [0.7.151] - 2024-08-27
### Added
- **canvasLab**
  - :sunny: `PROPERTY_BLOCKS` module,
    - `individual.master` mutator & accessor
    - `collection.template` mutator & accessor
  - :sunny: `Location` class, for storing location data for animations
  - :blossom: `Animation` class,
    - `_cacheObject` function, to cache object
    - `_checkQueue` function, to check whether queue is set
    - `_clearCanvas` function, to clear the canvas
    - `_drawCache` function, to draw cached object(s)
    - `_getPointByDegreeNDistance` function, to returns a point based off of the direction & distance passed
    - `_setLocationData` function, to set `Location` data
    - `_transition` function, to calculate an animation transition

- **devSuite**
  - :sunny: `Lab` class, added code folding, via hotkey <kbd>Ctrl</kbd> + <kbd>-</kbd> + <kbd>;</kbd>

### Changed
- **canvasLab**
  - :full_moon: `PROPERTY_BLOCKS` module,
      - `discrete` to `individual`
      - `combined` to `collection`
  - :full_moon: `UTILITIES` module,
    - `push`, added storage type check prior to push, for constructor argument pushes
    - `misc.pushPop`, added storage check, prior to push or pop
    - moved `color`, `draw`, `misc`, & `set` function into an `individual` containing; for better organization

### Refactored
- **canvasLab**
  - :last_quarter_moon: `VALIDATION` module,
    - `isCanvasLabObject` to include collections
  - :last_quarter_moon: `Rgb` class, supplemented `alpha` mutator & accessor with `PROPERTY_BLOCKS.alpha`
  - :last_quarter_moon: `Stroke` class, refactored `segments` setter to not set the `type` property
  - :last_quarter_moon: `Line` class, reorganized
  - :last_quarter_moon: Supplemented the following mutators & accessors
    - `Anchor` class,
      - `point` with `PROPERTY_BLOCKS.individual.point`
      - `x` with `PROPERTY_BLOCKS.individual.pointX`
      - `y` with `PROPERTY_BLOCKS.individual.pointY`
    - `Point` class,
      - `canvas` with `PROPERTY_BLOCKS.individual.canvas`
    - `Shadow` class,
      - `offset` with `PROPERTY_BLOCKS.individual.offset`
      - `x` with `PROPERTY_BLOCKS.individual.offsetX`
      - `y` with `PROPERTY_BLOCKS.individual.offsetY`
    - `canvasLab` class, refactored `animate` to include new properties; `object`, `timing`, `period`, & `change`
    - `Animation` class,
      - `animate` function, to process animation(s) using a new animation processing schema
      - `_getAnimationProperties` function, to return animation properties using new animation processing schema

### Removed
- **canvasLab**
  - :pick: `UTILITIES` module,
    - `redraw`
  - :pick: `PROPERTY_BLOCKS` module,
    - `collection.start`
    - `collection.end`
  - :pick: `Rgb` class, removed `fade` function
  - :pick: `Text` class, removed `fillColorCycle` function

## [0.6.137] - 2024-08-13
### Added
- **canvasLab**
  - :sunny: `Group` class, added properties to include `Ellipses` & `RoundedRectangles` classes
  - :blossom: *The following child classes for extensibility*
    - `Ellipse` class
    - `Ellipses` class
    - `RoundedRectangle` class
    - `RoundedRectangles` class
  - :sunny: `SacredCircles` class, added `Ellipses` & `RoundedRectangles` to `_insertShapeA ( )` & `_insertShapeB ( )` functions

- **devSuite**
  - :sunny: `Lab` class, added multi-selectability feature to `keyboard` case to `loadScript ( )`
  - :sunny: `Main` entry point, added `Ellipse`, `Ellipses`, `RoundedRectangle`, & `RoundedRectangles` to `_cardObjects` object literal

### Refactored
- **canvasLab**
  - :last_quarter_moon: `Circle` class, expanded `_setAnchorPoint ( )` to include setting of either a `{number}` or `{Point}` for the internal `radius` property
  - :last_quarter_moon: `UTILITIES` module, expanded `draw.axis ( )` & `draw.border ( )` to include `Ellipses` & `RoundedRectangles` classes

- **devSuite**
  - :last_quarter_moon: Included `Ellipse`, `Ellipses`, `RoundedRectangle`, & `RoundedRectangles` types within:
    - `Page._setPropertiesBy ( )`
    - `Template._getImages ( )`
    - `Template._modifyCode ( )`
    - `Tool.isCanvasLabObject ( )`
  - :last_quarter_moon: `String.prototype.toTitleCase ( )`, included `roundedRectangle` & `roundedRectangles` to internal switch

## [0.5.129] - 2024-08-07
### Added
- **canvasLab**
  - :sunny: `Circle` class, added ability to create an ellipse if the radius contains a `Point` value, to access the ellipse X & Y coordinates
  - :sunny: `Rectangle` class, added `_round` property, to added rounding properties for rounded rectangles
  - :blossom: `cImage` class, to create `Image` objects
  - :sunny: `Fill` class,
    - Added `pattern` property, to set the `ctx.fillStyle ( )` pattern property
    - Added `repetition` property, to set each pattern's `repetition` property
      - `"repeat"` (both directions)
      - `"repeat-x"` (horizontal only)
      - `"repeat-y"` (vertical only)
      - `"no-repeat"` (neither direction)
  - :sunny: `VALIDATION` module, added `isPointNAspect ( )` to returns whether the passed value is a `Point` & `Aspect`

### Changed
- :full_moon: `Rectangle` class,
  - Supplant `_setAnchorPoint ( )` with `UTILITIES.set.anchorPoint ( )`
  - Supplant `center` property with `PROPERTY_BLOCKS.discrete.center ( )`
  - Supplant `area` property with `PROPERTY_BLOCKS.discrete.area ( )`
  - Supplant `perimeter` property with `PROPERTY_BLOCKS.discrete.perimeter ( )`
- :full_moon: `SacredCircles` class, added `round` property for `Rectangle` class
- :full_moon: `Anchor` class, supplant `point` property with `PROPERTY_BLOCKS.discrete.point ( )`

### Refactored
- **canvasLab**
  - :last_quarter_moon: `Rectangle` class,
    - Modified `draw ( )` to include rounding property value(s)
    - Modified `_drawBorder ( )` to include rounding property value(s)
  - :last_quarter_moon: `Options` class, `anchor` & `axis` properties

- **devSuite**
  - :last_quarter_moon: **To include `CImage` type**
    - `Page._setPropertiesBy ( )`
    - `Template._getImages ( )`
    - `Template._modifyCode ( )`
    - `Tool.isCanvasLabObject ( )`

### Fixed
- :dragon: `Circle` class, fixed `_setAnchorPoint ( )` where `this.anchor.type` was used in switch instead of `this.anchor.align`

## [0.4.118] - 2024-07-29
### Added
- **devSuite**
  - Added library, mousetrap v1.6.5 for toggling lab features
  - `Lab` class
    - `keyboardCommands` event listener case, for toggling of lab features
    - `setGrid ( )` to set grid overlay
  - `Ui` class,
    - `_navMove ( )` to move nav menu left or right
    - `_navButtonReset ( )` to reset nav button position when closed
    - `navButtonsReset` event listener case, to reset navigation buttons position
    - `lab` event listener case, to trigger lab
  - `Queue` class,
    - `index ( )` getter, to get index
    - `entry ( )` setter, to push in an entry
    - `isEnd ( )` to return whether this queue is at its end
    - `isLast ( )` to return whether this queue is on its last element
    - `isSet ( )` to return whether this queue is set, or populated
    - `#touched` attribute, to identify when the queue has been manipulated post instantiation and reset

### Refactored
- **canvasLab**
  - `Application` & `canvasLab` classes, replaced animation keyword `flow`, with `sequence`
  - `Animation` class, `animate ( )` to incorporate multiple consecutive animations
  - `SacredCircles` class, general optimization and refactoring
  - `VALIDATION` module, `isPlan ( )` to better identify `Group` plans

- **devSuite**
  - `Template` class, replaced animation keyword `flow`, with `sequence`
  - `Queue` class, to take Arrays & single element instances as constructor arguments

### Removed
- **devSuite**
  - `Ui` class, `_adjustGridCenter ( )`

### Fixed
- **canvasLab**
  - `Group` class, added `_isCanvasLabObject ( )` for validation
  - `UTILITIES` module, fixed `_anchor.fill.color` to accept `Rgb` class instances rather than strings

## [0.4.104] - 2024-07-18
### Added
- **devSuite**
  - `Template` class, lab toggle button to card-object(s)
  - `Ui` class, `toggle.lab ( )` to toggle lab from each card-object
  - `main`, `toggleLab ( )` to toggle lab from each card-object

### Refactored
- **devSuite**
  - `Ui` class
    - `toggle.fullscreen ( )` to exclude unnecessary variables
    - `clearScreen ( )` to include lab functionality

### Removed
- **devSuite**
  - `Lab` class, `canvas` case from `Lab._setEventListeners ( )`
  - `Ui` class, `lab` case from `Ui._setEventListeners ( )`

## [0.4.98] - 2024-07-17
### Added
- **canvasLab**
  - `Group` class, `_setAllCanvases ( )` to set all canvases throughout each internal collection of objects

- **devSuite**
  - `Template` class
    - `_modifyCode ( )` to modify code to include instantiation expressions & unique variable identifiers
    - `_modifyPlanCode ( )` to modify code to include instantiation expressions & unique variable identifiers; for Plans only
    - `_modifyVariables ( )` to modify existing variable name with uniquely identified variable name

### Refactored
- **devSuite**
  - `Page` class, to include `Plan` within group regex.
  - `Template` class
    - `_getCodeTemplate ( )` to be more streamlined and easier to parse
    - `_getImages ( )` to include `Plan` as part of its algorithm
  - `Ui` class, to include `Plan` to `lab` event listener, to toggle navigation when clicked; for Plans only

### Removed
- **devSuite**
  - `Tool` class, `isCanvasLabCollection ( )`

## [0.4.88] - 2024-07-12
### Added
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

- **devSuite**
  - `Tool` class, `isCanvasLabCollection ( )` to determine whether the passed value is an 'Object' canvasLab category
  - `Ui` class
    - `toggle._collapsibles ( )` to toggle collapsible nav-menu menu items
    - `_collapseButtonsExcept ( )` to collapse all passed buttons, outside of index passed

### Changed
- **canvasLab**
  - `ancillary` folder to `components`

### Removed
- **canvasLab**
  - `PROPERTY_BLOCKS` module
  - `UTILITITES` module
    - `draw.collection.twoDimensional ( )`
    - `draw.collection.oneDimensional ( )`
  - `Processing` class

- **devSuite**
  - `Ui` class
    - `_checkCollapsible ( )`
    - `_collapseButtons ( )`

### Refactored
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

- **devSuite**
  - `Template` class
    - `_initializer.object` to include collections; `Lines`, `Circles`, `Rectangles`, `Texts`, and `Group`
    - `_getCodeTemplate ( )`, to include collections: `Lines`, `Circles`, `Rectangles`, `Texts`, and `Group`
  - `Ui` class, `getClass ( )` to include collections: `Lines`, `Circles`, `Rectangles`, `Texts`, and `Group`

## [0.3.78] - 2024-07-01
### Added
- **canvasLab**
  - `PROPERTY_BLOCKS` module, `discrete.alpha ( )` mutators
  - `VALIDATION` module, `isPlan ( )`, to returns whether the passed value is a Plan
  - `Circles`, `Lines`, `Rectangles`, and `Texts` classes,
    - `endPoint ( )` to return the last Point within this Array
    - `redraw ( )` to redraw this object
  - `Group` class, an array class to group any and all object type
  - `SacredCircles` class, Group Plan

- **devSuite**
  - `Lab` class, `clearConsole` case to `_setEventListeners ( )`, to toggle lab *clear console* feature
  - `Tool` class, added Collection objects to `isCanvasLabObject ( )`
  - `Ui` class, `toggle.boolean ( )`, to toggle boolean value in lab

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
- **canvasLab**
  - `Application` class, `_center ( )` to return center ( x & y coordinates ) for the present window
  - `Queue` class

- **devSuite**
  - `main`, added `_scripts` object; to contain various loadable lab scripts
  - `Lab` class
    - `_setMenuPopups ( )` to set the lab's menu items in relation to internal scripts
    - `_getMenuPopup ( )` to get menu popup item with the passed 'element' param
  - `Ui` class, `_adjustGridCenter ( )` to adjust the center of the grid; temporary fix.

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
  - `PROPERTY_BLOCKS.discrete.alpha ( )` function for alpha setters
  - **`VALIDATION`**
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

## Previous Commits
---

| Version     | Date         | Commit                                                                | Comments                                                                                                                     |
| :---------  | :----------: | :-------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `[0.7.210]` | `2024-11-20` | `CURRENT`                                                             | <sup>Added Range class, and mass property to objects.</sup>                                                                  |
| `[0.7.207]` | `2024-11-15` | [`a893a7d`](https://github.com/Justin-Byrne/canvasLab/commit/a893a7d) | <sup>Added velocity property to core object classes, plus general refactoring.</sup>                                         |
| `[0.7.201]` | `2024-11-07` | [`5a5a78a`](https://github.com/Justin-Byrne/canvasLab/commit/5a5a78a) | <sup>Optimized myTransistions class, fixed minor errors in core objects.</sup>                                               |
| `[0.7.196]` | `2024-10-24` | [`7d8ec76`](https://github.com/Justin-Byrne/canvasLab/commit/7d8ec76) | <sup>Added myTransitions class, fixed minor errors in Group & Animation(s) classes, and general refactoring.</sup>           |
| `[0.7.179]` | `2024-09-27` | [`647b2b8`](https://github.com/Justin-Byrne/canvasLab/commit/647b2b8) | <sup>Added numerous animation functions to the Animation & Position classes, and general refactoring.</sup>                  |
| `[0.7.173]` | `2024-09-18` | [`d47997c`](https://github.com/Justin-Byrne/canvasLab/commit/d47997c) | <sup>Added angle & coordinate system to Lab, small additions to several Object classes, and general refactoring.</sup>       |
| `[0.7.163]` | `2024-09-10` | [`377e925`](https://github.com/Justin-Byrne/canvasLab/commit/377e925) | <sup>Added Animations class, fixed angle orientation(s) for 360 degree rotation(s), and general refactoring.</sup>           |
| `[0.7.158]` | `2024-08-30` | [`94c76a2`](https://github.com/Justin-Byrne/canvasLab/commit/94c76a2) | <sup>Added features to cancel current animations, and changed the Location class as Position; class.</sup>                   |
| `[0.7.151]` | `2024-08-27` | [`0d9f971`](https://github.com/Justin-Byrne/canvasLab/commit/0d9f971) | <sup>Added Location class, refactored many Animation processes, and re-organized programs schema.</sup>                      |
| `[0.6.137]` | `2024-08-13` | [`d4865e2`](https://github.com/Justin-Byrne/canvasLab/commit/d4865e2) | <sup>Added Ellipse(s) & RoundedRectangle(s) classes, mutli-select functionality, with refactoring.</sup>                     |
| `[0.5.129]` | `2024-08-07` | [`a0c7ae3`](https://github.com/Justin-Byrne/canvasLab/commit/a0c7ae3) | <sup>Added cImage class, ellipse to Circle, rounding to Rectangles, Pattern to Fill, with general fixes & refactoring.</sup> |
| `[0.4.118]` | `2024-07-29` | [`07db323`](https://github.com/Justin-Byrne/canvasLab/commit/07db323) | <sup>Added lab keyboard commands, modified core animation handling, and general refactoring.</sup>                           |
| `[0.4.104]` | `2024-07-18` | [`f968611`](https://github.com/Justin-Byrne/canvasLab/commit/f968611) | <sup>Moved lab button to front of each card-object, with minor refactoring and cleanup.</sup>                                |
| `[0.4.98]`  | `2024-07-17` | [`6878c36`](https://github.com/Justin-Byrne/canvasLab/commit/6878c36) | <sup>Modified devSuite to include Plans, with minor refactoring included.</sup>                                              |
| `[0.4.88]`  | `2024-07-12` | [`67fcf06`](https://github.com/Justin-Byrne/canvasLab/commit/67fcf06) | <sup>Added collection classes, & major refactoring of PROPERTY_BLOCKS & UTILITIES.</sup>                                     |
| `[0.3.78]`  | `2024-07-01` | [`62b10b3`](https://github.com/Justin-Byrne/canvasLab/commit/62b10b3) | <sup>Fixed UTILITIES.draw.axis, and added boolean toggle & clear console feature(s) to lab.</sup>                            |
| `[0.3.67]`  | `2024-06-11` | [`2a1cc1b`](https://github.com/Justin-Byrne/canvasLab/commit/2a1cc1b) | <sup>Implemented Queue class, general cleanup & refactoring.</sup>                                                           |
| `[0.3.59]`  | `2024-06-03` | [`5d1df4a`](https://github.com/Justin-Byrne/canvasLab/commit/5d1df4a) | <sup>Implemented various lab-station features.</sup>                                                                         |
| `[0.3.55]`  | `2024-05-29` | [`d9ba544`](https://github.com/Justin-Byrne/canvasLab/commit/d9ba544) | <sup>Refactored in app (devSuite) documentation.</sup>                                                                       |
| `[0.3.54]`  | `2024-05-26` | [`fd05d82`](https://github.com/Justin-Byrne/canvasLab/commit/fd05d82) | <sup>Added child class accessibility nodes to devSuite.</sup>                                                                |
| `[0.3.48]`  | `2024-05-10` | [`0032dc5`](https://github.com/Justin-Byrne/canvasLab/commit/0032dc5) | <sup>Added gradient classes, expanded upon UTILITIES & VALIDATION modules.</sup>                                             |
| `[0.3.30]`  | `2024-05-06` | [`a4b29b5`](https://github.com/Justin-Byrne/canvasLab/commit/a4b29b5) | <sup>Refactored navigation links as self generative.</sup>                                                                   |
| `[0.3.25]`  | `2024-05-02` | [`80ece25`](https://github.com/Justin-Byrne/canvasLab/commit/80ece25) | <sup>Added color models, and general cleanup.</sup>                                                                          |
| `[0.2.17]`  | `2024-04-26` | [`be58a6e`](https://github.com/Justin-Byrne/canvasLab/commit/be58a6e) | <sup>Fixed unintentional recursive calls & minor refactoring for UI, Page, & Template classes.</sup>                         |
| `[0.2.11]`  | `2024-04-22` | [`671c1da`](https://github.com/Justin-Byrne/canvasLab/commit/671c1da) | <sup>Refactored dev-tools (devSuite) into independent classes & updated UI.</sup>                                            |
| `[0.1.11]`  | `2024-04-03` | [`6df392e`](https://github.com/Justin-Byrne/canvasLab/commit/6df392e) | <sup>Implemented dev-tools navigation toggle & refactored RWD for mobile devices.</sup>                                      |
| `[0.1.10]`  | `2023-12-27` | [`3ccf9b4`](https://github.com/Justin-Byrne/canvasLab/commit/3ccf9b4) | <sup>Implemented lab-station full-screen & navigation toggles.</sup>                                                         |
| `[0.1.9]`   | `2023-12-26` | [`c694fb6`](https://github.com/Justin-Byrne/canvasLab/commit/c694fb6) | <sup>Implemented UI enhancements & color-picker for ace-editor.</sup>                                                        |
| `[0.1.8]`   | `2023-12-18` | [`766c4ae`](https://github.com/Justin-Byrne/canvasLab/commit/766c4ae) | <sup>Implemented lab station, ace9, & script editor.</sup>                                                                   |
| `[0.1.7]`   | `2023-12-08` | [`1b28ce8`](https://github.com/Justin-Byrne/canvasLab/commit/1b28ce8) | <sup>Implemented preset timing (easing functions) selection for animations.</sup>                                            |
| `[0.1.6]`   | `2023-12-01` | [`cc4f730`](https://github.com/Justin-Byrne/canvasLab/commit/cc4f730) | <sup>Added & refactored various front & back-end features for dev-tools.</sup>                                               |
| `[0.1.5]`   | `2023-11-26` | [`db2c514`](https://github.com/Justin-Byrne/canvasLab/commit/db2c514) | <sup>Refactored animation functions & expanded dev-tools navigation.</sup>                                                   |
| `[0.1.4]`   | `2023-11-22` | [`0e9813f`](https://github.com/Justin-Byrne/canvasLab/commit/0e9813f) | <sup>Added foundation for animations.</sup>                                                                                  |
| `[0.1.2]`   | `2023-10-27` | [`6008fb1`](https://github.com/Justin-Byrne/canvasLab/commit/6008fb1) | <sup>Added object, subject, & collection classes.</sup> 												                                              |
| `[0.0.2]`   | `2023-10-13` | [`981cdf8`](https://github.com/Justin-Byrne/canvasLab/commit/981cdf8) | <sup>Added additional resources & visuals to dev-tools UI.</sup> 										                                        |
| `[0.0.1]`   | `2023-10-05` | [`5bd2683`](https://github.com/Justin-Byrne/canvasLab/commit/5bd2683) | <sup>Included general build & testing tools, with core classes & modules.</sup>                                              |
| `[0.0.0]`   | `2023-10-02` | [`5131349`](https://github.com/Justin-Byrne/canvasLab/commit/5131349) | <sup>Initial upload.</sup>                                                                                                   |

---

## Types of changes
- `Added` added functions or properties.
- `Changed` changed existing function call names, placement, location, and/or properties.
- `Deprecated` soon-to-be removed features.
- `Fixed` fixed bug.
- `Refactored` refactored existing functionality.
- `Removed` removed features.
- `Security` secured vulnerabilities.

## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/canvasLab/blob/main/images/cube_sm.png)

==Byrne-Systems © 2024 - All rights reserved.==

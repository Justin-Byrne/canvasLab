# canvasLab

![license](https://img.shields.io/github/license/Justin-Byrne/canvasLab?style=flat-square)
<img src="https://img.shields.io/badge/Chrome-130.0.6723.92-yellow?style=flat-square&logo=googlechrome&logoColor=white" />
![issues](https://img.shields.io/github/issues/Justin-Byrne/canvasLab?style=flat-square)
<img src="https://img.shields.io/badge/Version-0.7.201-navy?style=flat-square" />
<img src="https://img.shields.io/github/languages/code-size/Justin-Byrne/canvasLab?style=flat-square" />

HTML5 canvas illustration & animation framework

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Development](#development)
- [Documentation](#documentation)
- [Support](#support)
- [Structure](#structure)

## Installation

Migrate to your desired download location, and download this repository to your system using git clone:

```sh
git clone https://github.com/Justin-Byrne/canvasLab.git
```

:paperclip: Link `canvasLab-<version>.js` library to your project

```html
    <meta ... >
    <link ... >

    <script src="script/libs/canvasLab-<version>.js"></script>

</head>
```

> A standard and minified version of this library can be found under `.\script\distro\`

## Usage

### Initialization

:truck: Load **canvasLab** through the following initiator

```javascript
/**
 * Initializes canvasLab
 * @param               {string} [canvas]               Canvas id tag
 */
initCanvasLab ( 'my-canvas-id' );
```

## Features

| :pencil2: 		| :control_knobs: | :control_knobs:   | :control_knobs: | :control_knobs: 	| :control_knobs: 	| :control_knobs: 				  | :control_knobs: | :control_knobs: 	| :control_knobs: 	| :control_knobs: | :control_knobs:   |
| :---------------- | :-------------: | :---------------: | :-------------: | :---------------: | :---------------: | :-----------------------------: | :-------------: | :---------------: | :---------------: | :-------------: | :---------------: |
| Line    			| ![Point][Point] | ![Anchor][Anchor] | ![Rgb][Rgb] 	| ![Stroke][Stroke] | ![Shadow][Shadow] | ![ControlPoints][ControlPoints] | 			    | 				  	| 				  	| 				  | 				  |
| Circle  			| ![Point][Point] | ![Anchor][Anchor] | ![Rgb][Rgb] 	| ![Stroke][Stroke] | ![Shadow][Shadow] | ![Fill][Fill] 				  | ![Stop][Stop]   | ![Linear][Linear] | ![Radial][Radial] | ![Conic][Conic] | ![Angle][Angle]   |
| Ellipse 			| ![Point][Point] | ![Anchor][Anchor] | ![Rgb][Rgb] 	| ![Stroke][Stroke] | ![Shadow][Shadow] | ![Fill][Fill] 				  | ![Stop][Stop]   | ![Linear][Linear] | ![Radial][Radial] | ![Conic][Conic] | ![Angle][Angle]   |
| Rectangle 		| ![Point][Point] | ![Anchor][Anchor] | ![Rgb][Rgb] 	| ![Stroke][Stroke] | ![Shadow][Shadow] | ![Fill][Fill] 				  | ![Stop][Stop]   | ![Linear][Linear] | ![Radial][Radial] | ![Conic][Conic] | ![Aspect][Aspect] |
| RoundedRectangle 	| ![Point][Point] | ![Anchor][Anchor] | ![Rgb][Rgb] 	| ![Stroke][Stroke] | ![Shadow][Shadow] | ![Fill][Fill] 				  | ![Stop][Stop]   | ![Linear][Linear] | ![Radial][Radial] | ![Conic][Conic] | ![Aspect][Aspect] |
| Text 				| ![Point][Point] | ![Anchor][Anchor] | ![Rgb][Rgb] 	| ![Stroke][Stroke] | ![Shadow][Shadow] | ![Fill][Fill] 				  | ![Stop][Stop]   | ![Linear][Linear] | ![Radial][Radial] | ![Conic][Conic] | ![Font][Font]  	  |
| cImage 			| ![Point][Point] | ![Anchor][Anchor] |             	| 					|					| 								  | 			    | 				  	|	 				| 				  |					  |

## Legend

<details>

<summary>Icons, Names, and Types</summary>

<table>
<td>

| :pencil2: 							| Name 				| Type     	|
| :-----------------------------------: | :---------------- | :-------- |
| ![Line][Line] 						| Line 				| Object 	|
| ![Circle][Circle] 					| Circle  			| Object 	|
| ![Ellipse][Ellipse] 					| Ellipse 			| Object 	|
| ![Rectangle][Rectangle] 				| Rectangle 		| Object 	|
| ![RoundedRectangle][RoundedRectangle] | RoundedRectangle 	| Object 	|
| ![Text][Text] 						| Text 				| Object 	|
| ![cImage][cImage] 					| cImage 			| Object 	|

</td>
<td>

| :control_knobs: 					| Name 				| Type      |
| :-------------------------------: | :---------------- | :-------- |
| ![Point][Point] 					| Point 			| Subject	|
| ![ControlPoints][ControlPoints] 	| ControlPoints 	| Subject 	|
| ![Anchor][Anchor] 				| Anchor 			| Subject 	|
| ![Angle][Angle] 					| Angle 			| Subject 	|
| ![Aspect][Aspect] 				| Aspect 			| Subject 	|
| ![Font][Font] 					| Font 				| Subject 	|
| ![Rgb][Rgb] 						| Rgb 				| Subject 	|

</td>
<td>

| :control_knobs: 		| Name 		| Type      |
| :-------------------: | :-------- | :-------- |
| ![Stroke][Stroke] 	| Stroke 	| Subject 	|
| ![Fill][Fill] 		| Fill 		| Subject 	|
| ![Stop][Stop] 		| Stop 		| Subject 	|
| ![Linear][Linear] 	| Linear 	| Subject 	|
| ![Radial][Radial] 	| Radial 	| Subject 	|
| ![Conic][Conic] 		| Conic 	| Subject 	|
| ![Shadow][Shadow] 	| Shadow 	| Subject 	|

</td>
</table>

</details>

[Line]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Object/Line.svg "Line"
[Circle]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Object/Circle.svg "Circle"
[Ellipse]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Object/Ellipse.svg "Ellipse"
[Rectangle]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Object/Rectangle.svg "Rectangle"
[RoundedRectangle]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Object/RoundedRectangle.svg "RoundedRectangle"
[Text]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Object/Text.svg "Text"
[cImage]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Object/cImage.svg "cImage"
[Point]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Point.svg "Point"
[ControlPoints]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/ControlPoints.svg "ControlPoints"
[Anchor]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Anchor.svg "Anchor"
[Angle]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Angle.svg "Angle"
[Aspect]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Aspect.svg "Aspect"
[Font]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Font.svg "Font"
[Rgb]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Rgb.svg "Rgb"
[Stroke]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Stroke.svg "Stroke"
[Fill]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Fill.svg "Fill"
[Stop]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Stop.svg "Stop"
[Linear]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Linear.svg "Linear"
[Radial]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Radial.svg "Radial"
[Conic]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Conic.svg "Conic"
[Shadow]: https://github.com/Justin-Byrne/canvasLab/blob/main/devSuite/images/svg/Subject/Shadow.svg "Shadow"

## Development

:computer: [Developer Suite](https://byrne-systems.com/portal/canvasLab/devSuite/index.html)

See the developer suite to view code examples, accompanied with a real-time code editor.

[![devSuite](https://github.com/Justin-Byrne/canvasLab/blob/main/images/devSuite.png)](https://byrne-systems.com/portal/canvasLab/devSuite/index.html)

## Documentation

[:book: JSDocs](https://byrne-systems.com/portal/canvasLab/docs/JSDoc/index.html)


## Support

Please [open an issue](https://github.com/Justin-Byrne/canvasLab/issues/new) for support.

## Structure

```
.
├── build
│   ├── audio
│   │   ├── failure.mp3
│   │   ├── shrink.mp3
│   │   ├── start.mp3
│   │   └── success.mp3
│   ├── docs
│   │   └── typedef.js
│   ├── compile.sh
│   └── watch.sh
├── docs
│   ├── CHANGELOG.md
│   └── JSDoc.md
├── script
│   ├── distro
│   │   ├── canvasLab-v0.7.201.js    [ 552 kb ]
│   │   ├── canvasLab.min.js         [ 108 kb ]
│   │   └── canvasLab.min.js.map
│   └── source
│       ├── classes
│       │   ├── Core
│       │   │   ├── Object
│       │   │   │   ├── Collections
│       │   │   │   │   ├── Circles.js
│       │   │   │   │   ├── Ellipses.js
│       │   │   │   │   ├── Group.js
│       │   │   │   │   ├── Lines.js
│       │   │   │   │   ├── Rectangles.js
│       │   │   │   │   ├── RoundedRectangles.js
│       │   │   │   │   └── Texts.js
│       │   │   │   ├── Properties
│       │   │   │   │   └── Position.js
│       │   │   │   ├── Circle.js
│       │   │   │   ├── Ellipse.js
│       │   │   │   ├── Line.js
│       │   │   │   ├── Rectangle.js
│       │   │   │   ├── RoundedRectangle.js
│       │   │   │   ├── Text.js
│       │   │   │   └── cImage.js
│       │   │   └── Subject
│       │   │       ├── Collections
│       │   │       │   ├── OptionsCollection.js
│       │   │       │   ├── PointCollection.js
│       │   │       │   ├── ShadowCollection.js
│       │   │       │   └── StrokeCollection.js
│       │   │       ├── Color
│       │   │       │   ├── Gradient
│       │   │       │   │   ├── Properties
│       │   │       │   │   │   └── Stop.js
│       │   │       │   │   ├── Conic.js
│       │   │       │   │   ├── Linear.js
│       │   │       │   │   └── Radial.js
│       │   │       │   └── Model
│       │   │       │       └── Rgb.js
│       │   │       ├── Staging
│       │   │       │   ├── Properties
│       │   │       │   │   └── Options.js
│       │   │       │   ├── Anchor.js
│       │   │       │   ├── Angle.js
│       │   │       │   ├── Aspect.js
│       │   │       │   ├── ControlPoints.js
│       │   │       │   ├── Font.js
│       │   │       │   └── Point.js
│       │   │       ├── Fill.js
│       │   │       ├── Shadow.js
│       │   │       └── Stroke.js
│       │   ├── Data-Structures
│       │   │   └── Queue.js
│       │   ├── Handlers
│       │   │   ├── Animation.js
│       │   │   ├── Animations.js
│       │   │   └── Application.js
│       │   ├── Templates
│       │   │   ├── Transitions
│       │   │   │   └── myTransitions.js
│       │   │   └── SacredCircles.js
│       │   └── canvasLab.js
│       └── components
│           ├── shared
│           │   ├── PropertyBlocks.js
│           │   ├── Utilities.js
│           │   └── Validation.js
│           └── debug.js
├── LICENSE
└── README.md
```
 
## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/canvasLab/blob/main/images/cube_sm.png)

= Byrne-Systems © 2024 - All rights reserved. =

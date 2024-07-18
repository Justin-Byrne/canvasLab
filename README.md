# canvasLab

![license](https://img.shields.io/github/license/Justin-Byrne/canvasLab?style=flat-square)
<img src="https://img.shields.io/badge/Chrome-126.0.6478.182-yellow?style=flat-square&logo=googlechrome&logoColor=white" />
![issues](https://img.shields.io/github/issues/Justin-Byrne/canvasLab?style=flat-square)
<img src="https://img.shields.io/badge/Version-0.4.104-green?style=flat-square" />
<img src="https://img.shields.io/github/languages/code-size/Justin-Byrne/canvasLab?style=flat-square" />

HTML5 canvas drawing framework

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
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

## Examples

:computer: [Developer Suite](https://byrne-systems.com/portal/canvasLab/devSuite/index.html)

See our developer suite to view various functions & effects in real-time.

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
│   ├── compile.sh
│   └── watch.sh
├── docs
│   ├── CHANGELOG.md
│   └── JSDoc.md
├── script
│   ├── distro
│   │   ├── canvasLab-v0.4.104.js    [ 388 kb ]
│   │   ├── canvasLab.min.js        [ 72 kb ]
│   │   └── canvasLab.min.js.map
│   └── source
│       ├── classes
│       │   ├── Data-Structures
│       │   │   └── Queue.js
│       │   ├── Handlers
│       │   │   ├── Animation.js
│       │   │   └── Application.js
│       │   ├── Object
│       │   │   ├── Collections
│       │   │   │   ├── Circles.js
│       │   │   │   ├── Group.js
│       │   │   │   ├── Lines.js
│       │   │   │   ├── Rectangles.js
│       │   │   │   └── Texts.js
│       │   │   ├── Circle.js
│       │   │   ├── Line.js
│       │   │   ├── Rectangle.js
│       │   │   └── Text.js
│       │   ├── Plans
│       │   │   └── SacredCircles.js
│       │   ├── Subject
│       │   │   ├── Collections
│       │   │   │   ├── OptionsCollection.js
│       │   │   │   ├── PointCollection.js
│       │   │   │   ├── ShadowCollection.js
│       │   │   │   └── StrokeCollection.js
│       │   │   ├── Color
│       │   │   │   ├── Gradient
│       │   │   │   │   ├── Properties
│       │   │   │   │   │   └── Stop.js
│       │   │   │   │   ├── Conic.js
│       │   │   │   │   ├── Linear.js
│       │   │   │   │   └── Radial.js
│       │   │   │   └── Model
│       │   │   │       └── Rgb.js
│       │   │   ├── Staging
│       │   │   │   ├── Properties
│       │   │   │   │   └── Options.js
│       │   │   │   ├── Anchor.js
│       │   │   │   ├── Angle.js
│       │   │   │   ├── Aspect.js
│       │   │   │   ├── ControlPoints.js
│       │   │   │   ├── Font.js
│       │   │   │   └── Point.js
│       │   │   ├── Fill.js
│       │   │   ├── Shadow.js
│       │   │   └── Stroke.js
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

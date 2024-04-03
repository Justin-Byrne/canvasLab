# canvasLab

![license](https://img.shields.io/github/license/Justin-Byrne/canvasLab?style=flat-square)
<img src="https://img.shields.io/badge/Chrome-123.0.6312.106-yellow?style=flat-square&logo=googlechrome&logoColor=white" />
![issues](https://img.shields.io/github/issues/Justin-Byrne/canvasLab?style=flat-square)
<img src="https://img.shields.io/badge/Version-0.1.11-green?style=flat-square" />
<img src="https://img.shields.io/github/languages/code-size/Justin-Byrne/canvasLab?style=flat-square" />

HTML5 canvas drawing framework

- [Installation](#installation)
- [Usage](#usage)
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

## Documentation

[:book: JSDoc](https://github.com/Justin-Byrne/canvasLab/blob/main/docs/JSDoc.md)


## Support

Please [open an issue](https://github.com/Justin-Byrne/canvasLab/issues/new) for support.

## Structure

```
.
├── build
│   ├── audio
│   │   ├── complete.mp3
│   │   ├── failure.mp3
│   │   ├── shrink.mp3
│   │   └── success.mp3
│   ├── compile.sh
│   └── watch.sh
├── docs
│   ├── CHANGELOG.md
│   └── JSDoc.md
├── script
│   ├── distro
│   │   ├── canvasLab-v0.1.11.js    [ 196 kb ]
│   │   ├── canvasLab.min.js        [ 52 kb ]
│   │   └── canvasLab.min.js.map
│   └── source
│       ├── ancillary
│       │   ├── shared
│       │   │   ├── PropertyBlocks.js
│       │   │   ├── Utilities.js
│       │   │   └── Validation.js
│       │   └── debug.js
│       └── classes
│           ├── Handlers
│           │   ├── Animation.js
│           │   ├── Application.js
│           │   └── Processing.js
│           ├── Object
│           │   ├── Collections
│           │   │   ├── Circles.js
│           │   │   ├── Group.js
│           │   │   ├── Lines.js
│           │   │   ├── Rectangles.js
│           │   │   └── Texts.js
│           │   ├── Circle.js
│           │   ├── Line.js
│           │   ├── Rectangle.js
│           │   └── Text.js
│           ├── Subject
│           │   ├── Collections
│           │   │   ├── OptionsCollection.js
│           │   │   ├── PointCollection.js
│           │   │   ├── ShadowCollection.js
│           │   │   └── StrokeCollection.js
│           │   ├── Anchor.js
│           │   ├── Angle.js
│           │   ├── Aspect.js
│           │   ├── ControlPoints.js
│           │   ├── Fill.js
│           │   ├── Font.js
│           │   ├── LinearGradient.js
│           │   ├── Options.js
│           │   ├── Point.js
│           │   ├── Shadow.js
│           │   ├── Stage.js
│           │   └── Stroke.js
│           └── canvasLab.js
├── LICENSE
└── README.md
```
 
## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/canvasLab/blob/main/images/cube_sm.png)

= Byrne-Systems © 2024 - All rights reserved. =

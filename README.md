# canvasLab

![issues](https://img.shields.io/github/issues/Justin-Byrne/canvasLab)
![license](https://img.shields.io/github/license/Justin-Byrne/canvasLab)
<img src=https://img.shields.io/badge/Version-0.1.2-green />
<img src=https://img.shields.io/github/languages/code-size/Justin-Byrne/canvasLab />

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

:link: Link `canvasLab-<version>.js` library to your project

```html
    <meta ... >
    <link ... >

    <script src="script/libs/canvasLab-<version>.js"></script>

</head>
```

## Usage

### Initialization

:ok_hand: load **canvasLab** through the following initiator

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
│   │   └── success.mp3
│   ├── compile.sh
│   └── watch.sh
├── docs
│   ├── CHANGELOG.md
│   └── JSDoc.md
├── script
│   ├── source
│   │   ├── ancillary
│   │   │   ├── shared
│   │   │   │   ├── PropertyBlocks.js
│   │   │   │   ├── Utilities.js
│   │   │   │   └── Validation.js
│   │   │   └── debug.js
│   │   └── classes
│   │       ├── Object
│   │       │   ├── Collections
│   │       │   │   ├── Circles.js
│   │       │   │   ├── Group.js
│   │       │   │   ├── Lines.js
│   │       │   │   ├── Rectangles.js
│   │       │   │   └── Texts.js
│   │       │   ├── Circle.js
│   │       │   ├── Line.js
│   │       │   ├── Rectangle.js
│   │       │   └── Text.js
│   │       ├── Subject
│   │       │   ├── Collections
│   │       │   │   ├── OptionsCollection.js
│   │       │   │   ├── PointCollection.js
│   │       │   │   ├── ShadowCollection.js
│   │       │   │   └── StrokeCollection.js
│   │       │   ├── Anchor.js
│   │       │   ├── Angle.js
│   │       │   ├── Aspect.js
│   │       │   ├── ControlPoints.js
│   │       │   ├── Fill.js
│   │       │   ├── Font.js
│   │       │   ├── Options.js
│   │       │   ├── Point.js
│   │       │   ├── Shadow.js
│   │       │   └── Stroke.js
│   │       ├── Application.js
│   │       └── canvasLab.js
│   └── canvasLab-v0.1.2.js
├── LICENSE
└── README.md
```
 
## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/canvasLab/blob/main/images/cube_sm.png)

== Byrne-Systems © 2023 - All rights reserved. ==

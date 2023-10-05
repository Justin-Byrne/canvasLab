# canvasLab

![issues](https://img.shields.io/github/issues/Justin-Byrne/canvasLab)
![forks](https://img.shields.io/github/forks/Justin-Byrne/canvasLab)
![stars](https://img.shields.io/github/stars/Justin-Byrne/canvasLab)
![license](https://img.shields.io/github/license/Justin-Byrne/canvasLab)
<img src=https://img.shields.io/badge/Version-0.0.1-green />

HTML5 canvas drawing framework

- [Support](#support)
- [Structure](#structure)

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
│   ├── API.md
│   └── CHANGELOG.md
├── script
│   ├── source
│   │   ├── ancillary
│   │   │   ├── shared
│   │   │   │   ├── PropertyBlocks.js
│   │   │   │   ├── Utilities.js
│   │   │   │   └── Validation.js
│   │   │   └── debug.js
│   │   └── classes
│   │       ├── Application.js
│   │       └── canvasLab.js
│   ├── canvasLab-v0.0.0.js
│   └── canvasLab-v0.0.1.js
├── tests
│   ├── fonts
│   │   ├── CascadiaCode
│   │   │   ├── otf
│   │   │   │   └── static
│   │   │   │       ├── CascadiaCode-Bold.otf
│   │   │   │       ├── CascadiaCode-BoldItalic.otf
│   │   │   │       ├── CascadiaCode-ExtraLight.otf
│   │   │   │       ├── CascadiaCode-ExtraLightItalic.otf
│   │   │   │       ├── CascadiaCode-Italic.otf
│   │   │   │       ├── CascadiaCode-Light.otf
│   │   │   │       ├── CascadiaCode-LightItalic.otf
│   │   │   │       ├── CascadiaCode-Regular.otf
│   │   │   │       ├── CascadiaCode-SemiBold.otf
│   │   │   │       ├── CascadiaCode-SemiBoldItalic.otf
│   │   │   │       ├── CascadiaCode-SemiLight.otf
│   │   │   │       ├── CascadiaCode-SemiLightItalic.otf
│   │   │   │       ├── CascadiaCodePL-Bold.otf
│   │   │   │       ├── CascadiaCodePL-BoldItalic.otf
│   │   │   │       ├── CascadiaCodePL-ExtraLight.otf
│   │   │   │       ├── CascadiaCodePL-ExtraLightItalic.otf
│   │   │   │       ├── CascadiaCodePL-Italic.otf
│   │   │   │       ├── CascadiaCodePL-Light.otf
│   │   │   │       ├── CascadiaCodePL-LightItalic.otf
│   │   │   │       ├── CascadiaCodePL-Regular.otf
│   │   │   │       ├── CascadiaCodePL-SemiBold.otf
│   │   │   │       ├── CascadiaCodePL-SemiBoldItalic.otf
│   │   │   │       ├── CascadiaCodePL-SemiLight.otf
│   │   │   │       ├── CascadiaCodePL-SemiLightItalic.otf
│   │   │   │       ├── CascadiaMono-Bold.otf
│   │   │   │       ├── CascadiaMono-BoldItalic.otf
│   │   │   │       ├── CascadiaMono-ExtraLight.otf
│   │   │   │       ├── CascadiaMono-ExtraLightItalic.otf
│   │   │   │       ├── CascadiaMono-Italic.otf
│   │   │   │       ├── CascadiaMono-Light.otf
│   │   │   │       ├── CascadiaMono-LightItalic.otf
│   │   │   │       ├── CascadiaMono-Regular.otf
│   │   │   │       ├── CascadiaMono-SemiBold.otf
│   │   │   │       ├── CascadiaMono-SemiBoldItalic.otf
│   │   │   │       ├── CascadiaMono-SemiLight.otf
│   │   │   │       ├── CascadiaMono-SemiLightItalic.otf
│   │   │   │       ├── CascadiaMonoPL-Bold.otf
│   │   │   │       ├── CascadiaMonoPL-BoldItalic.otf
│   │   │   │       ├── CascadiaMonoPL-ExtraLight.otf
│   │   │   │       ├── CascadiaMonoPL-ExtraLightItalic.otf
│   │   │   │       ├── CascadiaMonoPL-Italic.otf
│   │   │   │       ├── CascadiaMonoPL-Light.otf
│   │   │   │       ├── CascadiaMonoPL-LightItalic.otf
│   │   │   │       ├── CascadiaMonoPL-Regular.otf
│   │   │   │       ├── CascadiaMonoPL-SemiBold.otf
│   │   │   │       ├── CascadiaMonoPL-SemiBoldItalic.otf
│   │   │   │       ├── CascadiaMonoPL-SemiLight.otf
│   │   │   │       └── CascadiaMonoPL-SemiLightItalic.otf
│   │   │   ├── ttf
│   │   │   │   ├── static
│   │   │   │   │   ├── CascadiaCode-Bold.ttf
│   │   │   │   │   ├── CascadiaCode-BoldItalic.ttf
│   │   │   │   │   ├── CascadiaCode-ExtraLight.ttf
│   │   │   │   │   ├── CascadiaCode-ExtraLightItalic.ttf
│   │   │   │   │   ├── CascadiaCode-Italic.ttf
│   │   │   │   │   ├── CascadiaCode-Light.ttf
│   │   │   │   │   ├── CascadiaCode-LightItalic.ttf
│   │   │   │   │   ├── CascadiaCode-Regular.ttf
│   │   │   │   │   ├── CascadiaCode-SemiBold.ttf
│   │   │   │   │   ├── CascadiaCode-SemiBoldItalic.ttf
│   │   │   │   │   ├── CascadiaCode-SemiLight.ttf
│   │   │   │   │   ├── CascadiaCode-SemiLightItalic.ttf
│   │   │   │   │   ├── CascadiaCodePL-Bold.ttf
│   │   │   │   │   ├── CascadiaCodePL-BoldItalic.ttf
│   │   │   │   │   ├── CascadiaCodePL-ExtraLight.ttf
│   │   │   │   │   ├── CascadiaCodePL-ExtraLightItalic.ttf
│   │   │   │   │   ├── CascadiaCodePL-Italic.ttf
│   │   │   │   │   ├── CascadiaCodePL-Light.ttf
│   │   │   │   │   ├── CascadiaCodePL-LightItalic.ttf
│   │   │   │   │   ├── CascadiaCodePL-Regular.ttf
│   │   │   │   │   ├── CascadiaCodePL-SemiBold.ttf
│   │   │   │   │   ├── CascadiaCodePL-SemiBoldItalic.ttf
│   │   │   │   │   ├── CascadiaCodePL-SemiLight.ttf
│   │   │   │   │   ├── CascadiaCodePL-SemiLightItalic.ttf
│   │   │   │   │   ├── CascadiaMono-Bold.ttf
│   │   │   │   │   ├── CascadiaMono-BoldItalic.ttf
│   │   │   │   │   ├── CascadiaMono-ExtraLight.ttf
│   │   │   │   │   ├── CascadiaMono-ExtraLightItalic.ttf
│   │   │   │   │   ├── CascadiaMono-Italic.ttf
│   │   │   │   │   ├── CascadiaMono-Light.ttf
│   │   │   │   │   ├── CascadiaMono-LightItalic.ttf
│   │   │   │   │   ├── CascadiaMono-Regular.ttf
│   │   │   │   │   ├── CascadiaMono-SemiBold.ttf
│   │   │   │   │   ├── CascadiaMono-SemiBoldItalic.ttf
│   │   │   │   │   ├── CascadiaMono-SemiLight.ttf
│   │   │   │   │   ├── CascadiaMono-SemiLightItalic.ttf
│   │   │   │   │   ├── CascadiaMonoPL-Bold.ttf
│   │   │   │   │   ├── CascadiaMonoPL-BoldItalic.ttf
│   │   │   │   │   ├── CascadiaMonoPL-ExtraLight.ttf
│   │   │   │   │   ├── CascadiaMonoPL-ExtraLightItalic.ttf
│   │   │   │   │   ├── CascadiaMonoPL-Italic.ttf
│   │   │   │   │   ├── CascadiaMonoPL-Light.ttf
│   │   │   │   │   ├── CascadiaMonoPL-LightItalic.ttf
│   │   │   │   │   ├── CascadiaMonoPL-Regular.ttf
│   │   │   │   │   ├── CascadiaMonoPL-SemiBold.ttf
│   │   │   │   │   ├── CascadiaMonoPL-SemiBoldItalic.ttf
│   │   │   │   │   ├── CascadiaMonoPL-SemiLight.ttf
│   │   │   │   │   └── CascadiaMonoPL-SemiLightItalic.ttf
│   │   │   │   ├── CascadiaCode.ttf
│   │   │   │   ├── CascadiaCodeItalic.ttf
│   │   │   │   ├── CascadiaCodePL.ttf
│   │   │   │   ├── CascadiaCodePLItalic.ttf
│   │   │   │   ├── CascadiaMono.ttf
│   │   │   │   ├── CascadiaMonoItalic.ttf
│   │   │   │   ├── CascadiaMonoPL.ttf
│   │   │   │   └── CascadiaMonoPLItalic.ttf
│   │   │   └── woff2
│   │   │       ├── static
│   │   │       │   ├── CascadiaCode-Bold.woff2
│   │   │       │   ├── CascadiaCode-BoldItalic.woff2
│   │   │       │   ├── CascadiaCode-ExtraLight.woff2
│   │   │       │   ├── CascadiaCode-ExtraLightItalic.woff2
│   │   │       │   ├── CascadiaCode-Italic.woff2
│   │   │       │   ├── CascadiaCode-Light.woff2
│   │   │       │   ├── CascadiaCode-LightItalic.woff2
│   │   │       │   ├── CascadiaCode-Regular.woff2
│   │   │       │   ├── CascadiaCode-SemiBold.woff2
│   │   │       │   ├── CascadiaCode-SemiBoldItalic.woff2
│   │   │       │   ├── CascadiaCode-SemiLight.woff2
│   │   │       │   ├── CascadiaCode-SemiLightItalic.woff2
│   │   │       │   ├── CascadiaCodePL-Bold.woff2
│   │   │       │   ├── CascadiaCodePL-BoldItalic.woff2
│   │   │       │   ├── CascadiaCodePL-ExtraLight.woff2
│   │   │       │   ├── CascadiaCodePL-ExtraLightItalic.woff2
│   │   │       │   ├── CascadiaCodePL-Italic.woff2
│   │   │       │   ├── CascadiaCodePL-Light.woff2
│   │   │       │   ├── CascadiaCodePL-LightItalic.woff2
│   │   │       │   ├── CascadiaCodePL-Regular.woff2
│   │   │       │   ├── CascadiaCodePL-SemiBold.woff2
│   │   │       │   ├── CascadiaCodePL-SemiBoldItalic.woff2
│   │   │       │   ├── CascadiaCodePL-SemiLight.woff2
│   │   │       │   ├── CascadiaCodePL-SemiLightItalic.woff2
│   │   │       │   ├── CascadiaMono-Bold.woff2
│   │   │       │   ├── CascadiaMono-BoldItalic.woff2
│   │   │       │   ├── CascadiaMono-ExtraLight.woff2
│   │   │       │   ├── CascadiaMono-ExtraLightItalic.woff2
│   │   │       │   ├── CascadiaMono-Italic.woff2
│   │   │       │   ├── CascadiaMono-Light.woff2
│   │   │       │   ├── CascadiaMono-LightItalic.woff2
│   │   │       │   ├── CascadiaMono-Regular.woff2
│   │   │       │   ├── CascadiaMono-SemiBold.woff2
│   │   │       │   ├── CascadiaMono-SemiBoldItalic.woff2
│   │   │       │   ├── CascadiaMono-SemiLight.woff2
│   │   │       │   ├── CascadiaMono-SemiLightItalic.woff2
│   │   │       │   ├── CascadiaMonoPL-Bold.woff2
│   │   │       │   ├── CascadiaMonoPL-BoldItalic.woff2
│   │   │       │   ├── CascadiaMonoPL-ExtraLight.woff2
│   │   │       │   ├── CascadiaMonoPL-ExtraLightItalic.woff2
│   │   │       │   ├── CascadiaMonoPL-Italic.woff2
│   │   │       │   ├── CascadiaMonoPL-Light.woff2
│   │   │       │   ├── CascadiaMonoPL-LightItalic.woff2
│   │   │       │   ├── CascadiaMonoPL-Regular.woff2
│   │   │       │   ├── CascadiaMonoPL-SemiBold.woff2
│   │   │       │   ├── CascadiaMonoPL-SemiBoldItalic.woff2
│   │   │       │   ├── CascadiaMonoPL-SemiLight.woff2
│   │   │       │   └── CascadiaMonoPL-SemiLightItalic.woff2
│   │   │       ├── CascadiaCode.woff2
│   │   │       ├── CascadiaCodeItalic.woff2
│   │   │       ├── CascadiaCodePL.woff2
│   │   │       ├── CascadiaCodePLItalic.woff2
│   │   │       ├── CascadiaMono.woff2
│   │   │       ├── CascadiaMonoItalic.woff2
│   │   │       ├── CascadiaMonoPL.woff2
│   │   │       └── CascadiaMonoPLItalic.woff2
│   │   ├── CourierPrime
│   │   │   ├── CourierPrime-Regular.ttf
│   │   │   ├── OFL.txt
│   │   │   ├── courierprime-regular-webfont.woff
│   │   │   └── courierprime-regular-webfont.woff2
│   │   ├── Laptop
│   │   │   ├── Labtop-Bold.ttf
│   │   │   ├── info.txt
│   │   │   ├── labtop-bold-webfont.woff
│   │   │   └── labtop-bold-webfont.woff2
│   │   └── Roboto
│   │       ├── LICENSE.txt
│   │       ├── Roboto-Regular.ttf
│   │       ├── roboto-regular-webfont.woff
│   │       └── roboto-regular-webfont.woff2
│   ├── scripts
│   │   ├── bootstrap
│   │   │   ├── bootstrap.bundle.min.js
│   │   │   └── sidebars.js
│   │   ├── unit-tests
│   │   │   └── tests.js
│   │   └── main.js
│   └── styles
│       ├── bootstrap
│       │   └── sidebars.css
│       ├── main.css
│       ├── main.css.map
│       └── main.scss
├── LICENSE
└── README.md
```
 
## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/canvasLab/blob/main/images/cube_sm.png)

== Byrne-Systems © 2023 - All rights reserved. ==

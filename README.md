# react-sorcerer

Sorcerer is a react component that builds a srcset for your img tags.

Source sets make sure that the browser never downloads an image that is too small or too large. They increase site performance, and save your users bandwidth. They are like the Goldilocks of image optimization.

## Demo & Examples

Live demo: [brybrophy.github.io/react-sorcerer](http://brybrophy.github.io/react-sorcerer/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-sorcerer is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-sorcerer.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-sorcerer --save
```


## Usage

- Start by creating optimized versions of your images in different sizes.
- There should be one default image. (example: `defaultImg.jpg`)
- The optimized versions should be named according to the device they are optimzed for. (example: `defaultImg_mobileSm.jpg`, `defaultImg_tabletLg.jpg`)
- The images should all have the same extension type.
- They can be saved locally, or hosted on a server as long as the image and extension are the last item in url. (example: `https://api.example.com/images/defaultImg.jpg`)

```
import Sorcerer from 'react-sorcerer';

<Sorcerer
    alt="sorcerer"
    className="example-image"
    srcExt="jpg"
    srcPath="/images/defaultImg"
    minDevice="mobileSm"
    maxDevice="desktopXl"
/>
```

### Props

**alt (required)**

`React.PropTypes.string`

The alt attribute for your img tag.

**className**

`React.PropTypes.string`

A class for your image tag.

**devices**

`React.PropTypes.object`

When creating the srcset, Sorcerer uses a default object with key value pairs of common devices and widths. You can replace the default devices with your own custom object.

defaults to:

```
const devices = {
    mobileSm: 320,
    mobileLg: 414,
    tabletSm: 768,
    tabletLg: 1024,
    desktopXs: 1440,
    desktopSm: 1680,
    desktopMd: 1920,
    desktopLg: 2560,
    desktopXl: 3840
};
```

**errorSrc**

`React.PropTypes.string`

A fallback placeholder image that is supplied to the img onError event if your img fails to load.

examples:

`/images/errorImg.jpg || https://api.example.com/images/errorImg.jpg`

**maxDevice**

`React.PropTypes.string`

The maximum device in the srcSet range. Can be any key in the devices object.

defaults to:

`"desktopXl"`

**minDevice**

`React.PropTypes.string`

The minimum device in the srcSet range. Can be any key in the devices object.

defaults to:

`"mobileSm"`

**srcExt (required)**

`React.PropTypes.string`

The extension of the image files.

examples:

`jpg || jpeg || png || gif`

**srcPath (required)**

`React.PropTypes.string`

The path to the default image file. **DO NOT INCLUDE THE FILE EXTENSION HERE**

examples:

`/images/defaultImg || https://api.example.com/images/defaultImg`

### Notes

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT

Copyright (c) 2017 Bryan Brophy.

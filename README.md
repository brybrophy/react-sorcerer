# react-sorcerer

**NEW IN VERSION 2.x.x**
Sorcerer now includes an imageProcessor! Details documented below.

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

Sorcerer works by using a set of image sources to allow the browser to make a calculated decision and display to most optimal image. This means that you need to have optimized versions of the images on your site.

Sorcerer includes an image processor to do the heavy lifting for you.

### Image File Structure

To prepare your images for processing, you'll want to organize them in a certain way. Even if you choose to optimize your images by hand, using a tool like photoshop, you will want to organize your images in this way to use the Sorcerer component.

- Create an `images` directory somewhere in your project. `src` is usually a good place.
- Inside of `images` sort your image files into sub directories based on the percentage of screen width they make up.

For example, a full screen hero image would go in a subfolder `images/100`.
An image that takes up 30% of the screen width would go in `images/30`.

This doesn't need to be exact. Just a rough estimate of percentage is fine.

The images need to be large enough so that the image processor doesn't need to enlarge them. The default largest size that the image processor will put out is 3840px wide. So your images need to be at least that wide if you use the defaults.

### Image Processor

The imageProcessor uses [gulp](http://gulpjs.com/) and [sharp](http://sharp.dimens.io/en/stable/install/) to optimize your images. Sharp is the fastest image processing tool that exists. That speed comes with a set of prerequisites that can be viewed [here](http://sharp.dimens.io/en/stable/install/#prerequisites) and [here](https://github.com/nodejs/node-gyp#installation). Most developers will already have these prerequisites set up in their development environment.

Once you have made sure that you have all the prerequisites met, create a `gulpfile.js` file in your project root.

In your gulpfile, requrie gulp, gulp-responsive, and the image processor from react-sorcerer.

```
const gulp = require('gulp');
const responsive = require('gulp-responsive');
const imageProcessor = require('react-sorcerer/lib/imageProcessor');

```

Next, you will create a config object for the image processor. You will make a separate config for groups of images based on the percentage of screen width the need to cover.

Here is a breakdown of the config:

**gulp (required)** and **responsive (required)**
You need need to pass both of these dependancies into the image processor.

**inputPath (required)**
This is the path to the group of image files for a certain screen percentage. In the example below, there are two configs. One is pointing to the images that are have 100% screen width, and the other is pointing to the images that have 30% screen width.

**outputPath (optional)**
This is the outputPath for the optimized images. It needs to be somewhere other than the inputPath to prevent the processor from reprocessing images in the future.

Defaults to `inputPath + '/optimized'`

**coverage (required)**
An integer representation of the screen percentage for the image files.

**Sizes (optional)**
An object with all of the screen sizes you want to optimize for.

Defaults to
```
const sizes = {
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

Once you have created a config, pass it into the image processor.

```
...

var config100 = {
	gulp,
	responsive,
	inputPath: 'src/images/100',
	outputPath: 'src/images/100/optimized',
	coverage: 100
}

var config30 = {
	gulp,
	responsive,
	inputPath: 'src/images/30',
	outputPath: 'src/images/30/optimized',
	coverage: 30
}

imageProcessor(config100);
imageProcessor(config30);
```

When you pass a config into the image processor, it returns a gulp task that you can run to create optimized versions of your images. The last step is to include those tasks in either the default gulp task, or a named gulp task that will run all of the tasks returned by the image processor.

The first argument to the task will be the task name. I suggest using something like `processImages`. The second argument is an array with the tasks returned by the imageProcessor. The tasks are named according to the number passed into coverage in the config.

```
gulp.task('processImages', ['100', '30']);
```

Now, in the terminal, run `gulp processImages`. You can also add this command to the build script in your package.json.

When the process is done, you will have optimized versions of your images for the Sorcerer component to use.

### Sorcerer Component

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

**sizes**

`React.PropTypes.object`

When creating the srcset, Sorcerer uses a default object with key value pairs of common sizes and widths. You can replace the default sizes with your own custom object.

defaults to:

```
const sizes = {
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

The maximum size in the srcSet range. Can be any key in the sizes object.

defaults to:

`"desktopXl"`

**minDevice**

`React.PropTypes.string`

The minimum size in the srcSet range. Can be any key in the sizes object.

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

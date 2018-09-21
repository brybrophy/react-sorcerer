# react-sorcerer

[![npm version](https://badge.fury.io/js/react-sorcerer.svg)](https://badge.fury.io/js/react-sorcerer)
![https://img.shields.io/badge/dependencies-none-lightgrey.svg](https://img.shields.io/badge/dependencies-none-lightgrey.svg)
![https://img.shields.io/badge/dev-dependencies-up%20to%20date-brightgreen.svg](https://img.shields.io/badge/dev--dependencies-up%20to%20date-brightgreen.svg)
![https://img.shields.io/badge/build-passing-brightgreen.svg](https://img.shields.io/badge/build-passing-brightgreen.svg)

Sorcerer is a react component that builds a srcset for your img tags.

Source sets make sure that the browser never downloads an image that is too small or too large. They increase site performance, and save your users bandwidth. They are like the Goldilocks of image optimization.

### Demo

![react-sorcerer-demo](https://media.giphy.com/media/KZhpdMB5iISB5MhgB9/giphy.gif)

### Install

```
yarn add react-sorcerer
```


## Usage

Sorcerer works by using a set of image sources to allow the browser to make a calculated decision and display to most optimal image for the current screen size. 
They increase site performance, and save your users bandwidth. They are like the Goldilocks of image optimization.

```
import Sorcerer from 'react-sorcerer';

<Sorcerer
        alt="an image"
        coverage={100}
        src="https://dummyimage.com/1024x800/f00/fff"
        srcSetData={{
          xs: {
            src: 'https://dummyimage.com/300x200/f00/fff',
            width: 300
          },
          sm: {
            src: 'https://dummyimage.com/400x300/f00/fff',
            width: 400
          },
          md: {
            src: 'https://dummyimage.com/800x600/f00/fff',
            width: 800
          },
          lg: {
            src: 'https://dummyimage.com/1100x800/f00/fff',
            width: 1100
          }
        }}
      />
```

### Props

| Name        | Type                                    | Required | Description                                                 |
| ----------- | ----------------------------------------| -------- | ------------------------------------------------------------|
| alt         | `string`                                | `true`   | alt tag for the image                                       |
| className   | `string`                                | `false`  | className for the image                                     |
| coverage    | `number`                                | `true`   | an estimate of the display width of the image in percentage |
| src         | `string`                                | `true`   | the src of the main image                                   |
| srcSetData  | `{ sm: { src: string, width: number } }`| `true`   | a mapping of image sources and their width in pixels        |
| style       | `object`                                | `false`  | style object for the image                                  |



### License

MIT

Copyright (c) 2017 Bryan Brophy.

import { useSorcerer } from '../src';
import React from 'react';
import ReactDom from 'react-dom';

const imageStyles = {
  width: '100%'
};

const App = () => {
  const sorcererDemoProps = useSorcerer({
    alt: 'an image for the demo',
    coverage: 100,
    src: 'https://dummyimage.com/1024x800/f00/fff',
    srcSetData: [
      {
        src: 'https://dummyimage.com/300x200/f00/fff',
        width: 300
      },
      {
        src: 'https://dummyimage.com/400x300/f00/fff',
        width: 400
      },
      {
        src: 'https://dummyimage.com/800x600/f00/fff',
        width: 800
      },
      {
        src: 'https://dummyimage.com/1100x800/f00/fff',
        width: 1100
      }
    ]
  });

  return <img {...sorcererDemoProps} style={imageStyles} />;
};

ReactDom.render(<App />, document.getElementById('content'));

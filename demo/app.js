import Sorcerer from '../src/index';
import React from 'react';
import ReactDom from 'react-dom';

const imageStyles = {
  width: '100%'
};

class App extends React.Component {
  render() {
    return (
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
        style={imageStyles}
      />
    );
  }
}

ReactDom.render(<App />, document.getElementById('content'));

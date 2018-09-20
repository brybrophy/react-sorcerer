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
        src="https://www.fillmurray.com/800/500"
        srcSetData={{
          xs: {
            src: 'https://www.fillmurray.com/300/200',
            size: 320
          },
          sm: {
            src: 'https://www.fillmurray.com/500/300',
            size: 414
          },
          md: {
            src: 'https://www.fillmurray.com/600/400',
            size: 768
          },
          lg: {
            src: 'https://www.fillmurray.com/800/500',
            size: 1024
          }
        }}
        style={imageStyles}
      />
    );
  }
}

ReactDom.render(<App />, document.getElementById('content'));

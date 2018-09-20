import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorcerer from '../../src/index';

configure({ adapter: new Adapter() });

const mountProgressiveImage = (renderFn, delay) => {
  const defaultRender = image => {
    return <img src={image} />;
  };
  const render = renderFn || defaultRender;
  return mount(
    <ProgressiveImage
      delay={delay}
      src={src}
      placeholder={placeholder}
      srcSetData={srcSetData}
    >
      {render}
    </ProgressiveImage>
  );
};

describe('React Sorcerer', () => {
  beforeEach(() => {
    global.Image = Image;
  });

  it('Equals true', () => {
    expect(true).toBe(true);
  });
});

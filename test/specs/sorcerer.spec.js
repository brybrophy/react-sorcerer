import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorcerer from '../../src/index';

configure({ adapter: new Adapter() });

const srcSetData = {
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
};
const src = 'https://dummyimage.com/1024x800/f00/fff';
const expectedSizes = '(min-width: 300) 300, 50vw';
const expectedSrcSet =
  'https://dummyimage.com/300x200/f00/fff 300w, https://dummyimage.com/400x300/f00/fff 400w, https://dummyimage.com/800x600/f00/fff 800w, https://dummyimage.com/1100x800/f00/fff 1100w, ';

const mountSorcerer = () => {
  return mount(
    <Sorcerer alt="an image" coverage={100} src={src} srcSetData={srcSetData} />
  );
};

describe('React Sorcerer', () => {
  it('builds srcSet and sets it in state', () => {
    const wrapper = mountSorcerer();
    const { state } = wrapper.instance();
    expect(state.srcSet).toEqual(expectedSrcSet);
  });

  it('builds sizes and sets it in state', () => {
    const wrapper = mountSorcerer();
    const { state } = wrapper.instance();
    expect(state.sizes).toEqual(expectedSizes);
  });
});

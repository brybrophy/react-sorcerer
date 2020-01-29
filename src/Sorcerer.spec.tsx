import React from 'react';
import { shallow } from 'enzyme';

import Sorcerer from '../src/index';
import {
  srcSetData,
  expectedAlt,
  expectedSizes,
  expectedSrc,
  expectedSrcSet
} from '../testUtils/testData';

describe('Sorcerer Component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Sorcerer
        alt="an image"
        coverage={100}
        fallbackSrc={expectedSrc}
        srcSetData={srcSetData}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('assigns the correct props', () => {
    const wrapper = shallow(
      <Sorcerer
        alt={expectedAlt}
        coverage={100}
        fallbackSrc={expectedSrc}
        srcSetData={srcSetData}
      />
    );

    expect(wrapper.prop('alt')).toBe(expectedAlt);
    expect(wrapper.prop('sizes')).toBe(expectedSizes);
    expect(wrapper.prop('src')).toBe(expectedSrc);
    expect(wrapper.prop('srcSet')).toBe(expectedSrcSet);
  });
});

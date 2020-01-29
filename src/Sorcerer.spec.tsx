import React from 'react';
import { shallow } from 'enzyme';

import Sorcerer from './index';
import {
  srcSetData,
  expectedAlt,
  expectedSizes,
  expectedSrc,
  expectedSrcSet
} from './testUtils/testData';

describe('Sorcerer Component', () => {
  it('assigns the correct props', () => {
    const wrapper = shallow(
      <Sorcerer
        alt={expectedAlt}
        coverage={100}
        src={expectedSrc}
        srcSetData={srcSetData}
      />
    );

    expect(wrapper.prop('alt')).toBe(expectedAlt);
    expect(wrapper.prop('sizes')).toBe(expectedSizes);
    expect(wrapper.prop('src')).toBe(expectedSrc);
    expect(wrapper.prop('srcSet')).toBe(expectedSrcSet);
  });
});

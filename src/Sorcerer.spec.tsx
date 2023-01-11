import { render, screen } from '@testing-library/react';
import React from 'react';

import { Sorcerer } from './Sorcerer';
import {
  srcSetData,
  expectedAlt,
  expectedSizes,
  expectedSrc,
  expectedSrcSet,
} from './testUtils/testData';

describe('Sorcerer Component', () => {
  it('assigns the correct props', () => {
    render(
      <Sorcerer
        alt={expectedAlt}
        coverage={100}
        src={expectedSrc}
        srcSetData={srcSetData}
      />,
    );
    const image = screen.getByRole('img');
    expect(image).toHaveProperty('alt', expectedAlt);
    expect(image).toHaveProperty('sizes', expectedSizes);
    expect(image).toHaveProperty('src', expectedSrc);
    expect(image).toHaveProperty('srcset', expectedSrcSet);
  });
});

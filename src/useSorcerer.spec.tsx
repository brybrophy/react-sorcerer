import { renderHook } from '@testing-library/react';

import { useSorcerer } from './useSorcerer';
import {
  srcSetData,
  expectedAlt,
  expectedSizes,
  expectedSrc,
  expectedSrcSet,
} from './testUtils/testData';

describe('useSorcerer', () => {
  it('returns the expected result', () => {
    const { result } = renderHook(() =>
      useSorcerer({
        alt: expectedAlt,
        coverage: 100,
        src: expectedSrc,
        srcSetData,
      }),
    );
    expect(result.current.alt).toBe(expectedAlt);
    expect(result.current.sizes).toBe(expectedSizes);
    expect(result.current.src).toBe(expectedSrc);
    expect(result.current.srcSet).toBe(expectedSrcSet);
  });
});

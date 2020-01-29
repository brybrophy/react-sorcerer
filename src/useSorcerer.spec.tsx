import testHook from '../testUtils/testHook';
import { useSorcerer } from '../src/index';
import { UseSorcererResult } from './useSorcerer';
import {
  srcSetData,
  expectedAlt,
  expectedSizes,
  expectedSrc,
  expectedSrcSet
} from '../testUtils/testData';

describe('useSorcerer', () => {
  it('returns the expected result', () => {
    const actual: UseSorcererResult = testHook(() =>
      useSorcerer({
        alt: expectedAlt,
        coverage: 100,
        fallbackSrc: expectedSrc,
        srcSetData
      })
    );

    expect(actual.alt).toBe(expectedAlt);
    expect(actual.sizes).toBe(expectedSizes);
    expect(actual.src).toBe(expectedSrc);
    expect(actual.srcSet).toBe(expectedSrcSet);
  });
});

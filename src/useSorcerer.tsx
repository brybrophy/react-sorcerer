import { useMemo } from 'react';

export interface UseSorcererConfig {
  alt: string;
  coverage: number;
  src: string;
  srcSetData: SrcSetData[];
}

export interface SrcSetData {
  src: string;
  width: number;
}

export interface UseSorcererResult {
  alt: string;
  sizes: string;
  src: string;
  srcSet: string;
}

export function useSorcerer(config: UseSorcererConfig): UseSorcererResult {
  const srcSetDataAsString = JSON.stringify(config.srcSetData);

  const sizes = useMemo(() => {
    const { coverage, srcSetData } = config;
    const smallestSize = srcSetData[0].width;
    const viewWidth = coverage / 2;
    const nextSizes = `(min-width: ${smallestSize}) ${smallestSize}, ${viewWidth}vw`;

    return nextSizes;
  }, [config.coverage, srcSetDataAsString]);

  const srcSet = useMemo(() => {
    const { srcSetData } = config;
    let nextSrcSet = '';

    for (const item of srcSetData) {
      const { src, width } = item;
      nextSrcSet += `${src} ${width}w, `;
    }

    return nextSrcSet;
  }, [srcSetDataAsString]);

  return {
    alt: config.alt,
    sizes,
    src: config.src,
    srcSet,
  };
}

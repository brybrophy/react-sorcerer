import React, { CSSProperties, ReactElement } from 'react';

import { useSorcerer, UseSorcererConfig } from './useSorcerer';

export interface ReactSorcererProps extends UseSorcererConfig {
  className?: string;
  style?: CSSProperties;
}

export function Sorcerer(props: ReactSorcererProps): ReactElement {
  const sorcererImageProps = useSorcerer({
    alt: props.alt,
    coverage: props.coverage,
    src: props.src,
    srcSetData: props.srcSetData,
  });

  return (
    <img
      {...sorcererImageProps}
      className={props.className}
      src={props.src}
      style={props.style}
    />
  );
}

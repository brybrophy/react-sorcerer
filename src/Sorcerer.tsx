import React, { CSSProperties } from 'react';

import { useSorcerer, UseSorcererConfig } from './useSorcerer';

export interface ReactSorcererProps extends UseSorcererConfig {
  className?: string;
  style?: CSSProperties;
}

const Sorcerer = (props: ReactSorcererProps) => {
  const sorcererImageProps = useSorcerer({
    alt: props.alt,
    coverage: props.coverage,
    src: props.src,
    srcSetData: props.srcSetData
  });

  return (
    <img
      {...sorcererImageProps}
      className={props.className}
      src={props.src}
      style={props.style}
    />
  );
};

export default Sorcerer;

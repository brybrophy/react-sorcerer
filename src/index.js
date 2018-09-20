import React from 'react';
import deepEqual from './deepEqual';

export default class Sorcerer extends React.Component {
  state = {
    sizes: '',
    srcSet: ''
  };

  componentDidMount() {
    this.setSrcSetAndSizes();
  }

  componentDidUpdate(prevProps: Props) {
    const { coverage, srcSetData } = this.props;
    const coverageChanged = coverage !== prevProps.coverage;
    const srcSetChanged = !deepEqual(srcSetData, srcSetData);

    if (coverageChanged || srcSetChanged) {
      this.setSrcSetAndSizes();
    }
  }

  buildSrcSet = () => {
    const { srcSetData } = this.props;
    let nextSrcSet = '';

    for (const key in srcSetData) {
      const { size, src } = srcSetData[key];
      nextSrcSet += `${src} ${size}w, `;
    }

    console.log(nextSrcSet);

    return nextSrcSet;
  };

  buildSizes = () => {
    const { coverage, srcSetData } = this.props;
    const smallestSize = srcSetData[Object.keys(srcSetData)[0]].size;
    const nextSizes = `(min-width: ${smallestSize}) ${smallestSize}, ${coverage}vw`;

    console.log(nextSizes);

    return nextSizes;
  };

  setSrcSetAndSizes = () => {
    const nextSrcSet = this.buildSrcSet();
    const nextSizes = this.buildSizes();

    this.setState({ sizes: nextSizes, srcSet: nextSrcSet });
  };

  render() {
    return (
      <img
        alt={this.props.alt}
        className={this.props.className}
        sizes={this.state.sizes}
        src={this.props.src}
        srcSet={this.state.srcSet}
        style={this.props.style}
      />
    );
  }
}

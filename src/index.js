import React from 'react';
import PropTypes from 'prop-types';
import deepEqual from './deepEqual';

export default class Sorcerer extends React.Component {
  state = {
    sizes: '',
    srcSet: ''
  };

  componentDidMount() {
    this.setSrcSetAndSizes();
  }

  componentDidUpdate(prevProps) {
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
      const { src, width } = srcSetData[key];
      nextSrcSet += `${src} ${width}w, `;
    }

    return nextSrcSet;
  };

  buildSizes = () => {
    const { coverage, srcSetData } = this.props;
    const smallestSize = srcSetData[Object.keys(srcSetData)[0]].width;
    const viewWidth = coverage / 2;
    const nextSizes = `(min-width: ${smallestSize}) ${smallestSize}, ${viewWidth}vw`;

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

Sorcerer.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  coverage: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  srcSetData: PropTypes.objectOf(
    PropTypes.shape({ src: PropTypes.string, width: PropTypes.number })
  ),
  style: PropTypes.object
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getDefaultSizes from './defaultSizes';

export default class Sorcerer extends Component {
  constructor(props) {
    super(props);

    this.addErrorSrc = this.addErrorSrc.bind(this);
  }

  addErrorSrc(e) {
    e.target.src = this.props.errorSrc;
  }

  getSrcSet() {
    const { srcExt, srcName, srcPath, optimizedPath, maxSize, minSize } = this.props;
    const sizes = this.props.sizes ? this.props.sizes : getDefaultSizes();
    const min = minSize ? sizes[minSize] : 320;
    const max = maxSize ? sizes[maxSize] : 3840;
    const path = optimizedPath ? optimizedPath : srcPath + '/optimized';
    let srcSetStr = '';

    for (let size in sizes) {
      if (sizes[size] >= min && sizes[size] <= max) {
        if (sizes[size] === max) {
          srcSetStr += `${path}/${srcName}_${size}.${srcExt} ${sizes[size]}w`;
        } else {
          srcSetStr += `${path}/${srcName}_${size}.${srcExt} ${sizes[size]}w, `;
        }
      }
    }

    return srcSetStr;
  }

  imageProcessor() {
    return imageProcessor;
  }

  render() {
    return (
      <img
        alt={this.props.alt}
        className={this.props.className ? this.props.className : ''}
        src={`${this.props.srcPath}/${this.props.srcName}.${this.props.srcExt}`}
        srcSet={this.getSrcSet()}
        onError={this.props.errorSrc ? this.addErrorSrc : null}
      />
    );
  }
}

Sorcerer.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.object,
  errorSrc: PropTypes.string,
  maxSize: PropTypes.string,
  minSize: PropTypes.string,
  optimizedPath: PropTypes.string,
  srcExt: PropTypes.string.isRequired,
  srcName: PropTypes.string.isRequired,
  srcPath: PropTypes.string.isRequired
};

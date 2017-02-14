import React, { PropTypes } from 'react';
import getDefaultSizes from './defaultSizes';

class Sorcerer extends React.Component {
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

export default Sorcerer;

Sorcerer.propTypes = {
	alt: React.PropTypes.string.isRequired,
	className: React.PropTypes.string,
	sizes: React.PropTypes.object,
	errorSrc: React.PropTypes.string,
	maxSize: React.PropTypes.string,
	minSize: React.PropTypes.string,
	optimizedPath: React.PropTypes.string,
	srcExt: React.PropTypes.string.isRequired,
	srcName: React.PropTypes.string.isRequired,
	srcPath: React.PropTypes.string.isRequired
};

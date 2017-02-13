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
		const { srcExt, srcPath, maxDevice, minDevice } = this.props;
		const sizes = this.props.sizes ? this.props.sizes : getDefaultSizes();
		const min = minDevice ? sizes[minDevice] : 320;
		const max = maxDevice ? sizes[maxDevice] : 3840;
		let srcSetStr = '';

		for (let size in sizes) {
			if (sizes[size] >= min && sizes[size] <= max) {
				if (sizes[size] === max) {
					srcSetStr += `${srcPath}_${size}.${srcExt} ${sizes[size]}w`;
				} else {
					srcSetStr += `${srcPath}_${size}.${srcExt} ${sizes[size]}w, `;
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
				src={`${this.props.srcPath}.${this.props.srcExt}`}
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
	maxDevice: React.PropTypes.string,
	minDevice: React.PropTypes.string,
	srcExt: React.PropTypes.string.isRequired,
	srcPath: React.PropTypes.string.isRequired
};

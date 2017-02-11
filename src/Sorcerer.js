import React, { PropTypes } from 'react';
import { getDevices } from './defaultDevices';

export default class Sorcerer extends React.Component {
	constructor(props) {
		super(props);

		this.addErrorSrc = this.addErrorSrc.bind(this);
	}

	addErrorSrc(e) {
		e.target.src = this.props.errorSrc;
	}

	getSrcSet() {
		const { defaultSrc, maxDevice, minDevice } = this.props;
		const devices = this.props.devices ? this.props.devices : getDevices();
		const srcName = defaultSrc.split('.')[0];
		const srcExt = defaultSrc.split('.')[1];

		let srcSetStr = '';

		const min = minDevice ? devices[minDevice] : 320;
		const max = maxDevice ? devices[maxDevice] : 3840;

		for (let device in devices) {
			if (devices[device] >= min && devices[device] <= max) {
				if (devices[device] === max) {
					srcSetStr += `${srcName}_${device}.${srcExt} ${devices[device]}w`;
				} else {
					srcSetStr += `${srcName}_${device}.${srcExt} ${devices[device]}w, `;
				}
			}
		}

		return srcSetStr;
	}

	render() {
		return (
			<img
				alt={this.props.alt}
				className={this.props.className ? this.props.className : ''}
				src={this.props.defaultSrc}
				srcSet={this.getSrcSet()}
				onError={this.props.errorSrc ? this.addErrorSrc : null}
			/>
		);
	}
}

Sorcerer.propTypes = {
	alt: React.PropTypes.string.isRequired,
	className: React.PropTypes.string,
	defaultSrc: React.PropTypes.string.isRequired,
	devices: React.PropTypes.object,
	errorSrc: React.PropTypes.string,
	maxDevice: React.PropTypes.string,
	minDevice: React.PropTypes.string
}

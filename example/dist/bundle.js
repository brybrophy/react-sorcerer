require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function getDefaultDevices() {
    var devices = {
        mobileSm: 320,
        mobileLg: 414,
        tabletSm: 768,
        tabletLg: 1024,
        desktopXs: 1440,
        desktopSm: 1680,
        desktopMd: 1920,
        desktopLg: 2560,
        desktopXl: 3840
    };

    return devices;
}

module.exports = getDefaultDevices;

},{}],"react-sorcerer":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaultDevices = require('./defaultDevices');

var _defaultDevices2 = _interopRequireDefault(_defaultDevices);

var Sorcerer = (function (_React$Component) {
	_inherits(Sorcerer, _React$Component);

	function Sorcerer(props) {
		_classCallCheck(this, Sorcerer);

		_get(Object.getPrototypeOf(Sorcerer.prototype), 'constructor', this).call(this, props);

		this.addErrorSrc = this.addErrorSrc.bind(this);
	}

	_createClass(Sorcerer, [{
		key: 'addErrorSrc',
		value: function addErrorSrc(e) {
			e.target.src = this.props.errorSrc;
		}
	}, {
		key: 'getSrcSet',
		value: function getSrcSet() {
			var _props = this.props;
			var srcExt = _props.srcExt;
			var srcPath = _props.srcPath;
			var maxDevice = _props.maxDevice;
			var minDevice = _props.minDevice;

			var devices = this.props.devices ? this.props.devices : (0, _defaultDevices2['default'])();
			var min = minDevice ? devices[minDevice] : 320;
			var max = maxDevice ? devices[maxDevice] : 3840;
			var srcSetStr = '';

			for (var device in devices) {
				if (devices[device] >= min && devices[device] <= max) {
					if (devices[device] === max) {
						srcSetStr += srcPath + '_' + device + '.' + srcExt + ' ' + devices[device] + 'w';
					} else {
						srcSetStr += srcPath + '_' + device + '.' + srcExt + ' ' + devices[device] + 'w, ';
					}
				}
			}

			return srcSetStr;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement('img', {
				alt: this.props.alt,
				className: this.props.className ? this.props.className : '',
				src: this.props.srcPath + '.' + this.props.srcExt,
				srcSet: this.getSrcSet(),
				onError: this.props.errorSrc ? this.addErrorSrc : null
			});
		}
	}]);

	return Sorcerer;
})(_react2['default'].Component);

exports['default'] = Sorcerer;

Sorcerer.propTypes = {
	alt: _react2['default'].PropTypes.string.isRequired,
	className: _react2['default'].PropTypes.string,
	devices: _react2['default'].PropTypes.object,
	errorSrc: _react2['default'].PropTypes.string,
	maxDevice: _react2['default'].PropTypes.string,
	minDevice: _react2['default'].PropTypes.string,
	srcExt: _react2['default'].PropTypes.string.isRequired,
	srcPath: _react2['default'].PropTypes.string.isRequired
};
module.exports = exports['default'];

},{"./defaultDevices":1,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJvcGh5V29yay9Qcm9qZWN0cy9yZWFjdC1zb3JjZXJlci9zcmMvZGVmYXVsdERldmljZXMuanMiLCIvVXNlcnMvQnJvcGh5V29yay9Qcm9qZWN0cy9yZWFjdC1zb3JjZXJlci9zcmMvU29yY2VyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsaUJBQWlCLEdBQUc7QUFDekIsUUFBTSxPQUFPLEdBQUc7QUFDWixnQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBUSxFQUFFLElBQUk7QUFDZCxpQkFBUyxFQUFFLElBQUk7QUFDZixpQkFBUyxFQUFFLElBQUk7QUFDZixpQkFBUyxFQUFFLElBQUk7QUFDZixpQkFBUyxFQUFFLElBQUk7QUFDZixpQkFBUyxFQUFFLElBQUk7S0FDbEIsQ0FBQzs7QUFFRixXQUFPLE9BQU8sQ0FBQztDQUNsQjs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ2hCRixPQUFPOzs7OzhCQUNqQixrQkFBa0I7Ozs7SUFFcEIsUUFBUTtXQUFSLFFBQVE7O0FBQ2pCLFVBRFMsUUFBUSxDQUNoQixLQUFLLEVBQUU7d0JBREMsUUFBUTs7QUFFM0IsNkJBRm1CLFFBQVEsNkNBRXJCLEtBQUssRUFBRTs7QUFFYixNQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQy9DOztjQUxtQixRQUFROztTQU9qQixxQkFBQyxDQUFDLEVBQUU7QUFDZCxJQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztHQUNuQzs7O1NBRVEscUJBQUc7Z0JBQ3VDLElBQUksQ0FBQyxLQUFLO09BQXBELE1BQU0sVUFBTixNQUFNO09BQUUsT0FBTyxVQUFQLE9BQU87T0FBRSxTQUFTLFVBQVQsU0FBUztPQUFFLFNBQVMsVUFBVCxTQUFTOztBQUM3QyxPQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxrQ0FBWSxDQUFDO0FBQ3ZFLE9BQU0sR0FBRyxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2pELE9BQU0sR0FBRyxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2xELE9BQUksU0FBUyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkIsUUFBSyxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDM0IsUUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDckQsU0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO0FBQzVCLGVBQVMsSUFBTyxPQUFPLFNBQUksTUFBTSxTQUFJLE1BQU0sU0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQUcsQ0FBQztNQUNsRSxNQUFNO0FBQ04sZUFBUyxJQUFPLE9BQU8sU0FBSSxNQUFNLFNBQUksTUFBTSxTQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBSyxDQUFDO01BQ3BFO0tBQ0Q7SUFDRDs7QUFFRCxVQUFPLFNBQVMsQ0FBQztHQUNqQjs7O1NBRUssa0JBQUc7QUFDUixVQUNDO0FBQ0MsT0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxBQUFDO0FBQ3BCLGFBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLEFBQUM7QUFDNUQsT0FBRyxFQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxTQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxBQUFHO0FBQ2xELFVBQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEFBQUM7QUFDekIsV0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxBQUFDO0tBQ3RELENBQ0Q7R0FDRjs7O1FBekNtQixRQUFRO0dBQVMsbUJBQU0sU0FBUzs7cUJBQWhDLFFBQVE7O0FBNEM3QixRQUFRLENBQUMsU0FBUyxHQUFHO0FBQ3BCLElBQUcsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDdEMsVUFBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2pDLFFBQU8sRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUMvQixTQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsVUFBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2pDLFVBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxPQUFNLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQ3pDLFFBQU8sRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7Q0FDMUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBnZXREZWZhdWx0RGV2aWNlcygpIHtcbiAgICBjb25zdCBkZXZpY2VzID0ge1xuICAgICAgICBtb2JpbGVTbTogMzIwLFxuICAgICAgICBtb2JpbGVMZzogNDE0LFxuICAgICAgICB0YWJsZXRTbTogNzY4LFxuICAgICAgICB0YWJsZXRMZzogMTAyNCxcbiAgICAgICAgZGVza3RvcFhzOiAxNDQwLFxuICAgICAgICBkZXNrdG9wU206IDE2ODAsXG4gICAgICAgIGRlc2t0b3BNZDogMTkyMCxcbiAgICAgICAgZGVza3RvcExnOiAyNTYwLFxuICAgICAgICBkZXNrdG9wWGw6IDM4NDBcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRldmljZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGVmYXVsdERldmljZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldERldmljZXMgZnJvbSAnLi9kZWZhdWx0RGV2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcmNlcmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLmFkZEVycm9yU3JjID0gdGhpcy5hZGRFcnJvclNyYy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YWRkRXJyb3JTcmMoZSkge1xuXHRcdGUudGFyZ2V0LnNyYyA9IHRoaXMucHJvcHMuZXJyb3JTcmM7XG5cdH1cblxuXHRnZXRTcmNTZXQoKSB7XG5cdFx0Y29uc3QgeyBzcmNFeHQsIHNyY1BhdGgsIG1heERldmljZSwgbWluRGV2aWNlIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGRldmljZXMgPSB0aGlzLnByb3BzLmRldmljZXMgPyB0aGlzLnByb3BzLmRldmljZXMgOiBnZXREZXZpY2VzKCk7XG5cdFx0Y29uc3QgbWluID0gbWluRGV2aWNlID8gZGV2aWNlc1ttaW5EZXZpY2VdIDogMzIwO1xuXHRcdGNvbnN0IG1heCA9IG1heERldmljZSA/IGRldmljZXNbbWF4RGV2aWNlXSA6IDM4NDA7XG5cdFx0bGV0IHNyY1NldFN0ciA9ICcnO1xuXG5cdFx0Zm9yIChsZXQgZGV2aWNlIGluIGRldmljZXMpIHtcblx0XHRcdGlmIChkZXZpY2VzW2RldmljZV0gPj0gbWluICYmIGRldmljZXNbZGV2aWNlXSA8PSBtYXgpIHtcblx0XHRcdFx0aWYgKGRldmljZXNbZGV2aWNlXSA9PT0gbWF4KSB7XG5cdFx0XHRcdFx0c3JjU2V0U3RyICs9IGAke3NyY1BhdGh9XyR7ZGV2aWNlfS4ke3NyY0V4dH0gJHtkZXZpY2VzW2RldmljZV19d2A7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3JjU2V0U3RyICs9IGAke3NyY1BhdGh9XyR7ZGV2aWNlfS4ke3NyY0V4dH0gJHtkZXZpY2VzW2RldmljZV19dywgYDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzcmNTZXRTdHI7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbWdcblx0XHRcdFx0YWx0PXt0aGlzLnByb3BzLmFsdH1cblx0XHRcdFx0Y2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyd9XG5cdFx0XHRcdHNyYz17YCR7dGhpcy5wcm9wcy5zcmNQYXRofS4ke3RoaXMucHJvcHMuc3JjRXh0fWB9XG5cdFx0XHRcdHNyY1NldD17dGhpcy5nZXRTcmNTZXQoKX1cblx0XHRcdFx0b25FcnJvcj17dGhpcy5wcm9wcy5lcnJvclNyYyA/IHRoaXMuYWRkRXJyb3JTcmMgOiBudWxsfVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9XG59XG5cblNvcmNlcmVyLnByb3BUeXBlcyA9IHtcblx0YWx0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0ZGV2aWNlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcblx0ZXJyb3JTcmM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdG1heERldmljZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0bWluRGV2aWNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRzcmNFeHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0c3JjUGF0aDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuIl19

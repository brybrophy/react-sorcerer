require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDevices = getDevices;

function getDevices() {
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

			var devices = this.props.devices ? this.props.devices : (0, _defaultDevices.getDevices)();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJvcGh5V29yay9Qcm9qZWN0cy9yZWFjdC1zb3JjZXJlci9zcmMvZGVmYXVsdERldmljZXMuanMiLCIvVXNlcnMvQnJvcGh5V29yay9Qcm9qZWN0cy9yZWFjdC1zb3JjZXJlci9zcmMvU29yY2VyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQU8sU0FBUyxVQUFVLEdBQUc7QUFDekIsUUFBTSxPQUFPLEdBQUc7QUFDWixnQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBUSxFQUFFLEdBQUc7QUFDYixnQkFBUSxFQUFFLElBQUk7QUFDZCxpQkFBUyxFQUFFLElBQUk7QUFDZixpQkFBUyxFQUFFLElBQUk7QUFDZixpQkFBUyxFQUFFLElBQUk7QUFDZixpQkFBUyxFQUFFLElBQUk7QUFDZixpQkFBUyxFQUFFLElBQUk7S0FDbEIsQ0FBQzs7QUFFRixXQUFPLE9BQU8sQ0FBQztDQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNkZ0MsT0FBTzs7Ozs4QkFDYixrQkFBa0I7O0lBRXhCLFFBQVE7V0FBUixRQUFROztBQUNqQixVQURTLFFBQVEsQ0FDaEIsS0FBSyxFQUFFO3dCQURDLFFBQVE7O0FBRTNCLDZCQUZtQixRQUFRLDZDQUVyQixLQUFLLEVBQUU7O0FBRWIsTUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMvQzs7Y0FMbUIsUUFBUTs7U0FPakIscUJBQUMsQ0FBQyxFQUFFO0FBQ2QsSUFBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7R0FDbkM7OztTQUVRLHFCQUFHO2dCQUN1QyxJQUFJLENBQUMsS0FBSztPQUFwRCxNQUFNLFVBQU4sTUFBTTtPQUFFLE9BQU8sVUFBUCxPQUFPO09BQUUsU0FBUyxVQUFULFNBQVM7T0FBRSxTQUFTLFVBQVQsU0FBUzs7QUFDN0MsT0FBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsaUNBQVksQ0FBQztBQUN2RSxPQUFNLEdBQUcsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNqRCxPQUFNLEdBQUcsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNsRCxPQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7O0FBRW5CLFFBQUssSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO0FBQzNCLFFBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFO0FBQ3JELFNBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUM1QixlQUFTLElBQU8sT0FBTyxTQUFJLE1BQU0sU0FBSSxNQUFNLFNBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFHLENBQUM7TUFDbEUsTUFBTTtBQUNOLGVBQVMsSUFBTyxPQUFPLFNBQUksTUFBTSxTQUFJLE1BQU0sU0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQUssQ0FBQztNQUNwRTtLQUNEO0lBQ0Q7O0FBRUQsVUFBTyxTQUFTLENBQUM7R0FDakI7OztTQUVLLGtCQUFHO0FBQ1IsVUFDQztBQUNDLE9BQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQUFBQztBQUNwQixhQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxBQUFDO0FBQzVELE9BQUcsRUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sU0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBRztBQUNsRCxVQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxBQUFDO0FBQ3pCLFdBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQUFBQztLQUN0RCxDQUNEO0dBQ0Y7OztRQXpDbUIsUUFBUTtHQUFTLG1CQUFNLFNBQVM7O3FCQUFoQyxRQUFROztBQTRDN0IsUUFBUSxDQUFDLFNBQVMsR0FBRztBQUNwQixJQUFHLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQ3RDLFVBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxRQUFPLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDL0IsU0FBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2hDLFVBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxVQUFTLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDakMsT0FBTSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUN6QyxRQUFPLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0NBQzFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERldmljZXMoKSB7XG4gICAgY29uc3QgZGV2aWNlcyA9IHtcbiAgICAgICAgbW9iaWxlU206IDMyMCxcbiAgICAgICAgbW9iaWxlTGc6IDQxNCxcbiAgICAgICAgdGFibGV0U206IDc2OCxcbiAgICAgICAgdGFibGV0TGc6IDEwMjQsXG4gICAgICAgIGRlc2t0b3BYczogMTQ0MCxcbiAgICAgICAgZGVza3RvcFNtOiAxNjgwLFxuICAgICAgICBkZXNrdG9wTWQ6IDE5MjAsXG4gICAgICAgIGRlc2t0b3BMZzogMjU2MCxcbiAgICAgICAgZGVza3RvcFhsOiAzODQwXG4gICAgfTtcblxuICAgIHJldHVybiBkZXZpY2VzO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldERldmljZXMgfSBmcm9tICcuL2RlZmF1bHREZXZpY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29yY2VyZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuYWRkRXJyb3JTcmMgPSB0aGlzLmFkZEVycm9yU3JjLmJpbmQodGhpcyk7XG5cdH1cblxuXHRhZGRFcnJvclNyYyhlKSB7XG5cdFx0ZS50YXJnZXQuc3JjID0gdGhpcy5wcm9wcy5lcnJvclNyYztcblx0fVxuXG5cdGdldFNyY1NldCgpIHtcblx0XHRjb25zdCB7IHNyY0V4dCwgc3JjUGF0aCwgbWF4RGV2aWNlLCBtaW5EZXZpY2UgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZGV2aWNlcyA9IHRoaXMucHJvcHMuZGV2aWNlcyA/IHRoaXMucHJvcHMuZGV2aWNlcyA6IGdldERldmljZXMoKTtcblx0XHRjb25zdCBtaW4gPSBtaW5EZXZpY2UgPyBkZXZpY2VzW21pbkRldmljZV0gOiAzMjA7XG5cdFx0Y29uc3QgbWF4ID0gbWF4RGV2aWNlID8gZGV2aWNlc1ttYXhEZXZpY2VdIDogMzg0MDtcblx0XHRsZXQgc3JjU2V0U3RyID0gJyc7XG5cblx0XHRmb3IgKGxldCBkZXZpY2UgaW4gZGV2aWNlcykge1xuXHRcdFx0aWYgKGRldmljZXNbZGV2aWNlXSA+PSBtaW4gJiYgZGV2aWNlc1tkZXZpY2VdIDw9IG1heCkge1xuXHRcdFx0XHRpZiAoZGV2aWNlc1tkZXZpY2VdID09PSBtYXgpIHtcblx0XHRcdFx0XHRzcmNTZXRTdHIgKz0gYCR7c3JjUGF0aH1fJHtkZXZpY2V9LiR7c3JjRXh0fSAke2RldmljZXNbZGV2aWNlXX13YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzcmNTZXRTdHIgKz0gYCR7c3JjUGF0aH1fJHtkZXZpY2V9LiR7c3JjRXh0fSAke2RldmljZXNbZGV2aWNlXX13LCBgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNyY1NldFN0cjtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGltZ1xuXHRcdFx0XHRhbHQ9e3RoaXMucHJvcHMuYWx0fVxuXHRcdFx0XHRjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJ31cblx0XHRcdFx0c3JjPXtgJHt0aGlzLnByb3BzLnNyY1BhdGh9LiR7dGhpcy5wcm9wcy5zcmNFeHR9YH1cblx0XHRcdFx0c3JjU2V0PXt0aGlzLmdldFNyY1NldCgpfVxuXHRcdFx0XHRvbkVycm9yPXt0aGlzLnByb3BzLmVycm9yU3JjID8gdGhpcy5hZGRFcnJvclNyYyA6IG51bGx9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuU29yY2VyZXIucHJvcFR5cGVzID0ge1xuXHRhbHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRkZXZpY2VzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuXHRlcnJvclNyYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0bWF4RGV2aWNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRtaW5EZXZpY2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdHNyY0V4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRzcmNQYXRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG4iXX0=

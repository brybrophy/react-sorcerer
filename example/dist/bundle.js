require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function getDefaultSizes() {
    var sizes = {
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

    return sizes;
}

module.exports = getDefaultSizes;

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

var _defaultSizes = require('./defaultSizes');

var _defaultSizes2 = _interopRequireDefault(_defaultSizes);

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
			var srcName = _props.srcName;
			var srcPath = _props.srcPath;
			var optimizedPath = _props.optimizedPath;
			var maxSize = _props.maxSize;
			var minSize = _props.minSize;

			var sizes = this.props.sizes ? this.props.sizes : (0, _defaultSizes2['default'])();
			var min = minSize ? sizes[minSize] : 320;
			var max = maxSize ? sizes[maxSize] : 3840;
			var path = optimizedPath ? optimizedPath : srcPath + '/optimized';
			var srcSetStr = '';

			for (var size in sizes) {
				if (sizes[size] >= min && sizes[size] <= max) {
					if (sizes[size] === max) {
						srcSetStr += path + '/' + srcName + '_' + size + '.' + srcExt + ' ' + sizes[size] + 'w';
					} else {
						srcSetStr += path + '/' + srcName + '_' + size + '.' + srcExt + ' ' + sizes[size] + 'w, ';
					}
				}
			}

			return srcSetStr;
		}
	}, {
		key: 'imageProcessor',
		value: (function (_imageProcessor) {
			function imageProcessor() {
				return _imageProcessor.apply(this, arguments);
			}

			imageProcessor.toString = function () {
				return _imageProcessor.toString();
			};

			return imageProcessor;
		})(function () {
			return imageProcessor;
		})
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement('img', {
				alt: this.props.alt,
				className: this.props.className ? this.props.className : '',
				src: this.props.srcPath + '/' + this.props.srcName + '.' + this.props.srcExt,
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
	sizes: _react2['default'].PropTypes.object,
	errorSrc: _react2['default'].PropTypes.string,
	maxSize: _react2['default'].PropTypes.string,
	minSize: _react2['default'].PropTypes.string,
	optimizedPath: _react2['default'].PropTypes.string,
	srcExt: _react2['default'].PropTypes.string.isRequired,
	srcName: _react2['default'].PropTypes.string.isRequired,
	srcPath: _react2['default'].PropTypes.string.isRequired
};
module.exports = exports['default'];

},{"./defaultSizes":1,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJvcGh5V29yay9Qcm9qZWN0cy9yZWFjdC1zb3JjZXJlci9zcmMvZGVmYXVsdFNpemVzLmpzIiwiL1VzZXJzL0Jyb3BoeVdvcmsvUHJvamVjdHMvcmVhY3Qtc29yY2VyZXIvc3JjL1NvcmNlcmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUFTLGVBQWUsR0FBRztBQUN2QixRQUFNLEtBQUssR0FBRztBQUNWLGdCQUFRLEVBQUUsR0FBRztBQUNiLGdCQUFRLEVBQUUsR0FBRztBQUNiLGdCQUFRLEVBQUUsR0FBRztBQUNiLGdCQUFRLEVBQUUsSUFBSTtBQUNkLGlCQUFTLEVBQUUsSUFBSTtBQUNmLGlCQUFTLEVBQUUsSUFBSTtBQUNmLGlCQUFTLEVBQUUsSUFBSTtBQUNmLGlCQUFTLEVBQUUsSUFBSTtBQUNmLGlCQUFTLEVBQUUsSUFBSTtLQUNsQixDQUFDOztBQUVGLFdBQU8sS0FBSyxDQUFDO0NBQ2hCOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ2hCQSxPQUFPOzs7OzRCQUNaLGdCQUFnQjs7OztJQUV0QyxRQUFRO1dBQVIsUUFBUTs7QUFDRixVQUROLFFBQVEsQ0FDRCxLQUFLLEVBQUU7d0JBRGQsUUFBUTs7QUFFWiw2QkFGSSxRQUFRLDZDQUVOLEtBQUssRUFBRTs7QUFFYixNQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQy9DOztjQUxJLFFBQVE7O1NBT0YscUJBQUMsQ0FBQyxFQUFFO0FBQ2QsSUFBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7R0FDbkM7OztTQUVRLHFCQUFHO2dCQUMyRCxJQUFJLENBQUMsS0FBSztPQUF4RSxNQUFNLFVBQU4s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OlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBnZXREZWZhdWx0U2l6ZXMoKSB7XG4gICAgY29uc3Qgc2l6ZXMgPSB7XG4gICAgICAgIG1vYmlsZVNtOiAzMjAsXG4gICAgICAgIG1vYmlsZUxnOiA0MTQsXG4gICAgICAgIHRhYmxldFNtOiA3NjgsXG4gICAgICAgIHRhYmxldExnOiAxMDI0LFxuICAgICAgICBkZXNrdG9wWHM6IDE0NDAsXG4gICAgICAgIGRlc2t0b3BTbTogMTY4MCxcbiAgICAgICAgZGVza3RvcE1kOiAxOTIwLFxuICAgICAgICBkZXNrdG9wTGc6IDI1NjAsXG4gICAgICAgIGRlc2t0b3BYbDogMzg0MFxuICAgIH07XG5cbiAgICByZXR1cm4gc2l6ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGVmYXVsdFNpemVzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXREZWZhdWx0U2l6ZXMgZnJvbSAnLi9kZWZhdWx0U2l6ZXMnO1xuXG5jbGFzcyBTb3JjZXJlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5hZGRFcnJvclNyYyA9IHRoaXMuYWRkRXJyb3JTcmMuYmluZCh0aGlzKTtcblx0fVxuXG5cdGFkZEVycm9yU3JjKGUpIHtcblx0XHRlLnRhcmdldC5zcmMgPSB0aGlzLnByb3BzLmVycm9yU3JjO1xuXHR9XG5cblx0Z2V0U3JjU2V0KCkge1xuXHRcdGNvbnN0IHsgc3JjRXh0LCBzcmNOYW1lLCBzcmNQYXRoLCBvcHRpbWl6ZWRQYXRoLCBtYXhTaXplLCBtaW5TaXplIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHNpemVzID0gdGhpcy5wcm9wcy5zaXplcyA/IHRoaXMucHJvcHMuc2l6ZXMgOiBnZXREZWZhdWx0U2l6ZXMoKTtcblx0XHRjb25zdCBtaW4gPSBtaW5TaXplID8gc2l6ZXNbbWluU2l6ZV0gOiAzMjA7XG5cdFx0Y29uc3QgbWF4ID0gbWF4U2l6ZSA/IHNpemVzW21heFNpemVdIDogMzg0MDtcblx0XHRjb25zdCBwYXRoID0gb3B0aW1pemVkUGF0aCA/IG9wdGltaXplZFBhdGggOiBzcmNQYXRoICsgJy9vcHRpbWl6ZWQnO1xuXHRcdGxldCBzcmNTZXRTdHIgPSAnJztcblxuXHRcdGZvciAobGV0IHNpemUgaW4gc2l6ZXMpIHtcblx0XHRcdGlmIChzaXplc1tzaXplXSA+PSBtaW4gJiYgc2l6ZXNbc2l6ZV0gPD0gbWF4KSB7XG5cdFx0XHRcdGlmIChzaXplc1tzaXplXSA9PT0gbWF4KSB7XG5cdFx0XHRcdFx0c3JjU2V0U3RyICs9IGAke3BhdGh9LyR7c3JjTmFtZX1fJHtzaXplfS4ke3NyY0V4dH0gJHtzaXplc1tzaXplXX13YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzcmNTZXRTdHIgKz0gYCR7cGF0aH0vJHtzcmNOYW1lfV8ke3NpemV9LiR7c3JjRXh0fSAke3NpemVzW3NpemVdfXcsIGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3JjU2V0U3RyO1xuXHR9XG5cblx0aW1hZ2VQcm9jZXNzb3IoKSB7XG5cdFx0cmV0dXJuIGltYWdlUHJvY2Vzc29yO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW1nXG5cdFx0XHRcdGFsdD17dGhpcy5wcm9wcy5hbHR9XG5cdFx0XHRcdGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfVxuXHRcdFx0XHRzcmM9e2Ake3RoaXMucHJvcHMuc3JjUGF0aH0vJHt0aGlzLnByb3BzLnNyY05hbWV9LiR7dGhpcy5wcm9wcy5zcmNFeHR9YH1cblx0XHRcdFx0c3JjU2V0PXt0aGlzLmdldFNyY1NldCgpfVxuXHRcdFx0XHRvbkVycm9yPXt0aGlzLnByb3BzLmVycm9yU3JjID8gdGhpcy5hZGRFcnJvclNyYyA6IG51bGx9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU29yY2VyZXI7XG5cblNvcmNlcmVyLnByb3BUeXBlcyA9IHtcblx0YWx0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcblx0c2l6ZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdGVycm9yU3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRtYXhTaXplOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRtaW5TaXplOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRvcHRpbWl6ZWRQYXRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRzcmNFeHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0c3JjTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRzcmNQYXRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG4iXX0=

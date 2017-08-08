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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYnJ5YW5icm9waHkvUHJvamVjdHMvcmVhY3Qtc29yY2VyZXIvc3JjL2RlZmF1bHRTaXplcy5qcyIsIi9Vc2Vycy9icnlhbmJyb3BoeS9Qcm9qZWN0cy9yZWFjdC1zb3JjZXJlci9zcmMvU29yY2VyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsZUFBZSxHQUFHO0FBQ3ZCLFFBQU0sS0FBSyxHQUFHO0FBQ1YsZ0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQVEsRUFBRSxJQUFJO0FBQ2QsaUJBQVMsRUFBRSxJQUFJO0FBQ2YsaUJBQVMsRUFBRSxJQUFJO0FBQ2YsaUJBQVMsRUFBRSxJQUFJO0FBQ2YsaUJBQVMsRUFBRSxJQUFJO0FBQ2YsaUJBQVMsRUFBRSxJQUFJO0tBQ2xCLENBQUM7O0FBRUYsV0FBTyxLQUFLLENBQUM7Q0FDaEI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDaEJBLE9BQU87Ozs7NEJBQ1osZ0JBQWdCOzs7O0lBRXRDLFFBQVE7V0FBUixRQUFROztBQUNGLFVBRE4sUUFBUSxDQUNELEtBQUssRUFBRTt3QkFEZCxRQUFROztBQUVaLDZCQUZJLFFBQVEsNkNBRU4sS0FBSyxFQUFFOztBQUViLE1BQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDL0M7O2NBTEksUUFBUTs7U0FPRixxQkFBQyxDQUFDLEVBQUU7QUFDZCxJQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztHQUNuQzs7O1NBRVEscUJBQUc7Z0JBQzJELElBQUksQ0FBQyxLQUFLO09BQXhFLE1BQU0sVUFB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dCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGdldERlZmF1bHRTaXplcygpIHtcbiAgICBjb25zdCBzaXplcyA9IHtcbiAgICAgICAgbW9iaWxlU206IDMyMCxcbiAgICAgICAgbW9iaWxlTGc6IDQxNCxcbiAgICAgICAgdGFibGV0U206IDc2OCxcbiAgICAgICAgdGFibGV0TGc6IDEwMjQsXG4gICAgICAgIGRlc2t0b3BYczogMTQ0MCxcbiAgICAgICAgZGVza3RvcFNtOiAxNjgwLFxuICAgICAgICBkZXNrdG9wTWQ6IDE5MjAsXG4gICAgICAgIGRlc2t0b3BMZzogMjU2MCxcbiAgICAgICAgZGVza3RvcFhsOiAzODQwXG4gICAgfTtcblxuICAgIHJldHVybiBzaXplcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXREZWZhdWx0U2l6ZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldERlZmF1bHRTaXplcyBmcm9tICcuL2RlZmF1bHRTaXplcyc7XG5cbmNsYXNzIFNvcmNlcmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLmFkZEVycm9yU3JjID0gdGhpcy5hZGRFcnJvclNyYy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YWRkRXJyb3JTcmMoZSkge1xuXHRcdGUudGFyZ2V0LnNyYyA9IHRoaXMucHJvcHMuZXJyb3JTcmM7XG5cdH1cblxuXHRnZXRTcmNTZXQoKSB7XG5cdFx0Y29uc3QgeyBzcmNFeHQsIHNyY05hbWUsIHNyY1BhdGgsIG9wdGltaXplZFBhdGgsIG1heFNpemUsIG1pblNpemUgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qgc2l6ZXMgPSB0aGlzLnByb3BzLnNpemVzID8gdGhpcy5wcm9wcy5zaXplcyA6IGdldERlZmF1bHRTaXplcygpO1xuXHRcdGNvbnN0IG1pbiA9IG1pblNpemUgPyBzaXplc1ttaW5TaXplXSA6IDMyMDtcblx0XHRjb25zdCBtYXggPSBtYXhTaXplID8gc2l6ZXNbbWF4U2l6ZV0gOiAzODQwO1xuXHRcdGNvbnN0IHBhdGggPSBvcHRpbWl6ZWRQYXRoID8gb3B0aW1pemVkUGF0aCA6IHNyY1BhdGggKyAnL29wdGltaXplZCc7XG5cdFx0bGV0IHNyY1NldFN0ciA9ICcnO1xuXG5cdFx0Zm9yIChsZXQgc2l6ZSBpbiBzaXplcykge1xuXHRcdFx0aWYgKHNpemVzW3NpemVdID49IG1pbiAmJiBzaXplc1tzaXplXSA8PSBtYXgpIHtcblx0XHRcdFx0aWYgKHNpemVzW3NpemVdID09PSBtYXgpIHtcblx0XHRcdFx0XHRzcmNTZXRTdHIgKz0gYCR7cGF0aH0vJHtzcmNOYW1lfV8ke3NpemV9LiR7c3JjRXh0fSAke3NpemVzW3NpemVdfXdgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNyY1NldFN0ciArPSBgJHtwYXRofS8ke3NyY05hbWV9XyR7c2l6ZX0uJHtzcmNFeHR9ICR7c2l6ZXNbc2l6ZV19dywgYDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzcmNTZXRTdHI7XG5cdH1cblxuXHRpbWFnZVByb2Nlc3NvcigpIHtcblx0XHRyZXR1cm4gaW1hZ2VQcm9jZXNzb3I7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbWdcblx0XHRcdFx0YWx0PXt0aGlzLnByb3BzLmFsdH1cblx0XHRcdFx0Y2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyd9XG5cdFx0XHRcdHNyYz17YCR7dGhpcy5wcm9wcy5zcmNQYXRofS8ke3RoaXMucHJvcHMuc3JjTmFtZX0uJHt0aGlzLnByb3BzLnNyY0V4dH1gfVxuXHRcdFx0XHRzcmNTZXQ9e3RoaXMuZ2V0U3JjU2V0KCl9XG5cdFx0XHRcdG9uRXJyb3I9e3RoaXMucHJvcHMuZXJyb3JTcmMgPyB0aGlzLmFkZEVycm9yU3JjIDogbnVsbH1cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3JjZXJlcjtcblxuU29yY2VyZXIucHJvcFR5cGVzID0ge1xuXHRhbHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRzaXplczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcblx0ZXJyb3JTcmM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdG1heFNpemU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdG1pblNpemU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdG9wdGltaXplZFBhdGg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG5cdHNyY0V4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRzcmNOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHNyY1BhdGg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcbiJdfQ==

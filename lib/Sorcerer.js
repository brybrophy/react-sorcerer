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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defaultSizes = require('./defaultSizes');

var _defaultSizes2 = _interopRequireDefault(_defaultSizes);

var Sorcerer = (function (_Component) {
  _inherits(Sorcerer, _Component);

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
})(_react.Component);

exports['default'] = Sorcerer;

Sorcerer.propTypes = {
  alt: _propTypes2['default'].string.isRequired,
  className: _propTypes2['default'].string,
  sizes: _propTypes2['default'].object,
  errorSrc: _propTypes2['default'].string,
  maxSize: _propTypes2['default'].string,
  minSize: _propTypes2['default'].string,
  optimizedPath: _propTypes2['default'].string,
  srcExt: _propTypes2['default'].string.isRequired,
  srcName: _propTypes2['default'].string.isRequired,
  srcPath: _propTypes2['default'].string.isRequired
};
module.exports = exports['default'];
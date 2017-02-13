require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Sorcerer = require('react-sorcerer');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'image-container' },
			React.createElement(Sorcerer, {
				alt: 'sorcerer',
				className: 'example-image',
				srcExt: 'jpg',
				srcName: 'defaultImg',
				srcPath: 'images/100',
				minDevice: 'mobileSm',
				maxDevice: 'desktopXl'
			})
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-sorcerer":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJvcGh5V29yay9Qcm9qZWN0cy9yZWFjdC1zb3JjZXJlci9leGFtcGxlL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUV6QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsT0FBTSxFQUFDLGtCQUFHO0FBQ1QsU0FDQzs7S0FBSyxTQUFTLEVBQUMsaUJBQWlCO0dBQy9CLG9CQUFDLFFBQVE7QUFDUixPQUFHLEVBQUMsVUFBVTtBQUNkLGFBQVMsRUFBQyxlQUFlO0FBQ3pCLFVBQU0sRUFBQyxLQUFLO0FBQ1osV0FBTyxFQUFDLFlBQVk7QUFDcEIsV0FBTyxFQUFDLFlBQVk7QUFDcEIsYUFBUyxFQUFDLFVBQVU7QUFDcEIsYUFBUyxFQUFDLFdBQVc7S0FDcEI7R0FDRyxDQUNMO0VBQ0Y7Q0FDRCxDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIFNvcmNlcmVyID0gcmVxdWlyZSgncmVhY3Qtc29yY2VyZXInKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cblx0XHRcdFx0PFNvcmNlcmVyXG5cdFx0XHRcdFx0YWx0PVwic29yY2VyZXJcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImV4YW1wbGUtaW1hZ2VcIlxuXHRcdFx0XHRcdHNyY0V4dD1cImpwZ1wiXG5cdFx0XHRcdFx0c3JjTmFtZT1cImRlZmF1bHRJbWdcIlxuXHRcdFx0XHRcdHNyY1BhdGg9XCJpbWFnZXMvMTAwXCJcblx0XHRcdFx0XHRtaW5EZXZpY2U9XCJtb2JpbGVTbVwiXG5cdFx0XHRcdFx0bWF4RGV2aWNlPVwiZGVza3RvcFhsXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==

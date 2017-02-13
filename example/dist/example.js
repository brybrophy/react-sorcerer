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
				srcPath: 'images/defaultImg100',
				minDevice: 'mobileSm',
				maxDevice: 'desktopXl'
			})
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-sorcerer":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQnJvcGh5V29yay9Qcm9qZWN0cy9yZWFjdC1zb3JjZXJlci9leGFtcGxlL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUV6QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsT0FBTSxFQUFDLGtCQUFHO0FBQ1QsU0FDQzs7S0FBSyxTQUFTLEVBQUMsaUJBQWlCO0dBQy9CLG9CQUFDLFFBQVE7QUFDUixPQUFHLEVBQUMsVUFBVTtBQUNkLGFBQVMsRUFBQyxlQUFlO0FBQ3pCLFVBQU0sRUFBQyxLQUFLO0FBQ1osV0FBTyxFQUFDLHNCQUFzQjtBQUM5QixhQUFTLEVBQUMsVUFBVTtBQUNwQixhQUFTLEVBQUMsV0FBVztLQUNwQjtHQUNHLENBQ0w7RUFDRjtDQUNELENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLEdBQUcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgU29yY2VyZXIgPSByZXF1aXJlKCdyZWFjdC1zb3JjZXJlcicpO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8U29yY2VyZXJcblx0XHRcdFx0XHRhbHQ9XCJzb3JjZXJlclwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZXhhbXBsZS1pbWFnZVwiXG5cdFx0XHRcdFx0c3JjRXh0PVwianBnXCJcblx0XHRcdFx0XHRzcmNQYXRoPVwiaW1hZ2VzL2RlZmF1bHRJbWcxMDBcIlxuXHRcdFx0XHRcdG1pbkRldmljZT1cIm1vYmlsZVNtXCJcblx0XHRcdFx0XHRtYXhEZXZpY2U9XCJkZXNrdG9wWGxcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19

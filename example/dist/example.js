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
        srcPath: './images/100',
        minDevice: 'mobileSm',
        maxDevice: 'desktopXl',
        optimizedPath: './images/100/optimized'
      })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-sorcerer":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYnJ5YW5icm9waHkvUHJvamVjdHMvcmVhY3Qtc29yY2VyZXIvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFekMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzFCLFFBQU0sRUFBQSxrQkFBRztBQUNQLFdBQ0U7O1FBQUssU0FBUyxFQUFDLGlCQUFpQjtNQUM5QixvQkFBQyxRQUFRO0FBQ1AsV0FBRyxFQUFDLFVBQVU7QUFDZCxpQkFBUyxFQUFDLGVBQWU7QUFDekIsY0FBTSxFQUFDLEtBQUs7QUFDWixlQUFPLEVBQUMsWUFBWTtBQUNwQixlQUFPLEVBQUMsY0FBYztBQUN0QixpQkFBUyxFQUFDLFVBQVU7QUFDcEIsaUJBQVMsRUFBQyxXQUFXO0FBQ3JCLHFCQUFhLEVBQUMsd0JBQXdCO1FBQ3RDO0tBQ0UsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBTb3JjZXJlciA9IHJlcXVpcmUoJ3JlYWN0LXNvcmNlcmVyJyk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPFNvcmNlcmVyXG4gICAgICAgICAgYWx0PVwic29yY2VyZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImV4YW1wbGUtaW1hZ2VcIlxuICAgICAgICAgIHNyY0V4dD1cImpwZ1wiXG4gICAgICAgICAgc3JjTmFtZT1cImRlZmF1bHRJbWdcIlxuICAgICAgICAgIHNyY1BhdGg9XCIuL2ltYWdlcy8xMDBcIlxuICAgICAgICAgIG1pbkRldmljZT1cIm1vYmlsZVNtXCJcbiAgICAgICAgICBtYXhEZXZpY2U9XCJkZXNrdG9wWGxcIlxuICAgICAgICAgIG9wdGltaXplZFBhdGg9XCIuL2ltYWdlcy8xMDAvb3B0aW1pemVkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==

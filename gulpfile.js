var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');
var responsive = require('gulp-responsive');
var processImage = require('./src/imageProcesser').processImage;

processImage(gulp, responsive, 'example/dist/images');

var taskConfig = {

	component: {
		name: 'Sorcerer',
		dependencies: [
			'classnames',
			'react',
			'react-dom'
		],
		lib: 'lib'
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			'index.html',
			'images/*.{gif,jpg,png,svg}',
			'.gitignore'
		],
		scripts: [
			'example.js'
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);

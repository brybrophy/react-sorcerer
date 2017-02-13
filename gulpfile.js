var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');
var responsive = require('gulp-responsive');
var imageProcessor = require('./src/imageProcessor');

var oneHundred = imageProcessor(gulp, responsive, 'src/images/100', 'example/dist/images', 100);
var thirty = imageProcessor(gulp, responsive, 'src/images/30', 'example/dist/images', 30);

gulp.task('processImages', ['100', '30']);

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

var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');
var responsive = require('gulp-responsive');
var imageProcessor = require('./src/imageProcessor');

var config100 = {
	gulp,
	responsive,
	inputPath: 'src/images/100',
	outputPath: 'example/dist/images/100/optimized',
	coverage: 100
}

var oneHundred = imageProcessor(config100);

gulp.task('processImages', ['100']);

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

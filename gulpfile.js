var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');
var responsive = require('gulp-responsive');
var imageProcessor = require('./src/imageProcessor');

var config100 = {
	gulp,
	responsive,
	inputPath: 'src/images/100',
	outputPath: 'src/images/100/optimized',
	taksName: 'config100',
	coverage: 100
}

imageProcessor(config100);

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
			'images/100/optimized/*.jpg',
			'images/100/*.jpg',
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

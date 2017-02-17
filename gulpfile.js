var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

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

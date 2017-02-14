'use strict';

var mergeStream = require('merge-stream');
var getDefaultSizes = require('./defaultSizes');

function imageProcessor(config) {
    var gulp = config.gulp;
    var responsive = config.responsive;
    var inputPath = config.inputPath;
    var outputPath = config.outputPath;
    var coverage = config.coverage;
    var customSizes = config.customSizes;

    var sizes = customSizes ? customSizes : getDefaultSizes();

    gulp.task(coverage.toString(), function () {
        var tasks = [];

        for (var size in sizes) {
            tasks.push(gulp.src(inputPath + '/*.{jpg,png,webp,tiff}').pipe(responsive({
                '*.{jpg,png,webp,tiff}': {
                    width: sizes[size] * (coverage / 100),
                    rename: { suffix: '_' + size }
                }
            }, {
                errorOnEnlargement: false

            })).pipe(gulp.dest(outputPath ? outputPath : inputPath + '/optimized')));
        }
        return mergeStream(tasks);
    });
}

module.exports = imageProcessor;
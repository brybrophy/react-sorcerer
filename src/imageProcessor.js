const mergeStream = require('merge-stream');
const getDefaultSizes = require('./defaultSizes');

function imageProcessor(config) {
    const {
        gulp,
        responsive,
        inputPath,
        outputPath,
        coverage,
        taskName,
        customSizes
    } = config;

    const sizes = customSizes ? customSizes : getDefaultSizes();
    const name = taskName ? taskName : coverage.toString();

    gulp.task(name, function() {
        const tasks = [];

        for (let size in sizes) {
            tasks.push(
                gulp.src(`${inputPath}/*.{jpg,png,webp,tiff}`)
                .pipe(responsive({
                    '*.{jpg,png,webp,tiff}': {
                        width: sizes[size] * (coverage / 100),
                        rename: { suffix: `_${size}` }
                    }
                }, {
                    errorOnEnlargement: false

                }))
                .pipe(gulp.dest(outputPath ? outputPath : inputPath + '/optimized'))
            );
        }
        return mergeStream(tasks);
    });
}

module.exports = imageProcessor;

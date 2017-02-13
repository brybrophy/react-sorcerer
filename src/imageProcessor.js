const mergeStream = require('merge-stream');
const getDefaultSizes = require('./defaultSizes');

function imageProcessor(
    gulp,
    responsive,
    inputPath,
    outputPath,
    coverage,
    customSizes
) {
    const sizes = customSizes ? customSizes : getDefaultSizes();

    gulp.task(coverage.toString(), function() {
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
                .pipe(gulp.dest(outputPath))
            );
        }
        return mergeStream(tasks);
    });
}

module.exports = imageProcessor;

const mergeStream = require('merge-stream');
const getDefaultDevices = require('./defaultDevices');

function processImage(gulp, responsive, finalPath, customDevices) {
    const devices = customDevices ? customDevices : getDefaultDevices();

    gulp.task('processImage', function() {
        const tasks = [];

        for (let device in devices) {
            tasks.push(
                gulp.src('src/images/*.{jpg,png,webp,tiff}')
                .pipe(responsive({
                    '*.{jpg,png,webp,tiff}': {
                        width: devices[device],
                        rename: { suffix: `_${device}` }
                    }
                }, {
                    errorOnEnlargement: false
                }))
                .pipe(gulp.dest(finalPath))
            );
        }
        return mergeStream(tasks);
    });
}

module.exports = { processImage };

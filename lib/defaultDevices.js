"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDevices = getDevices;

function getDevices() {
    var devices = {
        mobileSm: 320,
        mobileLg: 414,
        tabletSm: 768,
        tabletLg: 1024,
        desktopXs: 1440,
        desktopSm: 1680,
        desktopMd: 1920,
        desktopLg: 2560,
        desktopXl: 3840
    };

    return devices;
}
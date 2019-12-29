'use strict'
import storageService from '../../services/storageService.js'

let gBackgroundUrl = 'https://wallpapermemory.com/uploads/600/teemo-wallpaper-hd-1080p-170874.jpg';

export default {
    getBackground,
    setBackground,
}


function getBackground() {
    if (storageService.load('background')) {
        gBackgroundUrl = storageService.load('background');
    } else {
        storageService.store('background', gBackgroundUrl);
    }
    return Promise.resolve(gBackgroundUrl);
}

function setBackground(background) {
    gBackgroundUrl = background;
    storageService.store('background', gBackgroundUrl);
}
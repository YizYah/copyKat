"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateNotifier = require('update-notifier');
const pkg = require('../../../package.json');
function checkForUpdates() {
    const notifier = updateNotifier({
        pkg,
        updateCheckInterval: 1000 * 60 * 60 * 24 * 2,
    });
    if (notifier.update) {
        // eslint-disable-next-line no-console
        console.log(`Update available: ${notifier.update.latest}`);
    }
}
exports.checkForUpdates = checkForUpdates;

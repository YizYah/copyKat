"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function getIgnoredList(config) {
    let allIgnored = [...constants_1.standardIgnored];
    if (config.ignore)
        allIgnored = [...allIgnored, ...config.ignore];
    allIgnored.push(config.dirs.custom);
    return allIgnored;
}
exports.getIgnoredList = getIgnoredList;

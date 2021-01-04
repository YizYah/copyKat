"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
// emphasized (bright)
exports.attention = (text) => chalk.redBright(text);
exports.generalOption = (text) => chalk.blueBright(text);
exports.exitOption = (text) => chalk.yellowBright(text);
exports.progress = (text) => chalk.greenBright(text);
// updates (background)
exports.statusUpdate = (text) => chalk.bgGrey(text);
// deemphasized
exports.explanation = (text) => chalk.yellow(text);
exports.userValue = (text) => chalk.green(text);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require('chalk');
exports.errorMessage = (details) => `installation error: ${chalk.red(details)}. If needed, please contact NoStack support: info@nostack.net.`;

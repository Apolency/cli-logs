const chalk = require('chalk');
const moment = require('moment');

const logger = {
    error(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.red('ERROR')} ${text}`);
    },
    warn(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.keyword('orange')('WARN')} ${text}`);
    },
    ready(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.green('READY')} ${text}`);
    },
    event(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.blue('EVENT')} ${text}`);
    },
    load(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.gray('LOAD')} ${text}`);
    },
    connect(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.green('READY')} ${text}`);
    }
};

module.exports = logger;

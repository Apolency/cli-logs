const chalk = require('chalk');

const logger = {
    error(text) {
        return console.log(`[${new Date().toISOString()}]: ${chalk.red('ERROR')} ${text}`);
    },
    warn(text) {
        return console.log(`[${new Date().toISOString()}]: ${chalk.keyword('orange')('WARN')} ${text}`);
    },
    ready(text) {
        return console.log(`[${new Date().toISOString()}]: ${chalk.green('READY')} ${text}`);
    },
    event(text) {
        return console.log(`[${new Date().toISOString()}]: ${chalk.blue('EVENT')} ${text}`);
    },
    load(text) {
        return console.log(`[${new Date().toISOString()}]: ${chalk.gray('LOAD')} ${text}`);
    },
    connect(text) {
        return console.log(`[${new Date().toISOString()}]: ${chalk.green('READY')} ${text}`);
    },
    debug(text) {
        return console.log(`[${new Date().toISOString()}]: ${chalk.blue('DEBUG')} ${text}`);
    },
    cmd(text) {
        return console.log(`[${new Date().toISOString()}]: ${chalk.blue('CMD')} ${text}`);
    }
};

module.exports = logger;
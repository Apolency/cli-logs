import * as moment from 'moment'
import * as chalk from 'chalk';

const logger = {
    log(text: string, type: string, color: string) {
        if (!color) {
            throw new TypeError('You must suply a color');
        };

        if (!type) {
            throw new TypeError('You must suply a type');
        };

        if (!text) {
            throw new TypeError('You must suply a text');
        };
        
        console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.keyword(color)(type)} ${text}`);
    },

    error(text: string) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.red('ERROR')} ${text}`);
    },
    warn(text: string) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.keyword('orange')('WARN')} ${text}`);
    },
    ready(text: string) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.green('READY')} ${text}`);
    },
    event(text: string) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.blue('EVENT')} ${text}`);
    },
    load(text: string) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.gray('LOAD')} ${text}`);
    },
    connect(text: string) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.green('CONNECT')} ${text}`);
    },
    debug(text: string) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.blue('DEBUG')} ${text}`);
    },
    cmd(text: string) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${chalk.blue('CMD')} ${text}`);
    }
};

export default logger

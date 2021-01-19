const moment = require('moment');
const { keyword, red, green, blue, gray } = require('chalk')

const logger = {
    /**
     * @param {String} text - Text to be logged
     * @param {String} type - Log category
     * @param {String} color - Color to be logged
    */
    log(text, type, color) {
        if (!color) {
            throw new TypeError('You must suply a color');
        };

        if (!type) {
            throw new TypeError('You must suply a type');
        };

        if (!text) {
            throw new TypeError('You must suply a text');
        };
        
        console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${keyword(color)(type)} ${text}`);
    },

    /**
     * @param {String} text - Text to be logged
     */
    error(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${red('ERROR')} ${text}`);
    },

    /**
     * @param {String} text - Text to be logged
     */
    warn(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${keyword('orange')('WARN')} ${text}`);
    },

    /**
     * @param {String} text - Text to be logged
     */
    ready(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${green('READY')} ${text}`);
    },

    /**
     * @param {String} text - Text to be logged
     */
    event(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${blue('EVENT')} ${text}`);
    },

    /**
     * @param {String} text - Text to be logged
     */
    load(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${gray('LOAD')} ${text}`);
    },

    /**
     * @param {String} text - Text to be logged
     */
    connect(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${green('CONNECT')} ${text}`);
    },

    /**
     * @param {String} text - Text to be logged
     */
    debug(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${blue('DEBUG')} ${text}`);
    },

    /**
     * @param {String} text - Text to be logged
     */
    cmd(text) {
        return console.log(`[${moment().format("DD-MM-YY H:m:s")}]: ${blue('CMD')} ${text}`);
    }
};

module.exports = logger

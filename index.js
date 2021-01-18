'use strict';

var moment = require('./DEVCAMP-JS-FOOTER/node_modules/moment/ts3.1-typings/moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};
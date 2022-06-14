import collect from 'collect.js';
import str from 'laravel-js-str';
import moment from 'moment';
import _ from 'lodash';

function makeCollection(items) {
    return collect(items);
}

function makeStr() {
    return arguments.length === 1
        ? str.of(arguments[0])
        : str;
}

function makeMoment() {
    return moment(...arguments)
}

function makeLodash() {
    return _;
}

export {
    makeCollection,
    makeStr,
    makeMoment,
    makeLodash
};
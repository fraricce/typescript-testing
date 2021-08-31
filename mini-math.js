"use strict";
exports.__esModule = true;
exports.isPrime = exports.fiboSeries = void 0;
var fiboSeries = function (num, total) {
    if (total === void 0) { total = [1, 1]; }
    var n = total[total.length - 1] + total[total.length - 2];
    if (n > num) {
        return total;
    }
    total.push(n);
    return exports.fiboSeries(num, total);
};
exports.fiboSeries = fiboSeries;
var isPrime = function (n) {
    if (n === 1)
        return false;
    if (n === 2)
        return true;
    for (var a = 2; a < n; a++) {
        if (n % a === 0)
            return false;
    }
    return true;
};
exports.isPrime = isPrime;
exports["default"] = exports.fiboSeries;

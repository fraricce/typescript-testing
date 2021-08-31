"use strict";
exports.__esModule = true;
var fiboSeries = function (num, total) {
    if (total === void 0) { total = [1, 1]; }
    var n = total[total.length - 1] + total[total.length - 2];
    if (n > num) {
        return total;
    }
    total.push(n);
    return fiboSeries(num, total);
};
exports["default"] = fiboSeries;

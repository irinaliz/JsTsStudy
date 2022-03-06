"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultvalue = exports.log4 = exports.log3 = exports.log2 = exports.log1 = void 0;
var log1 = function (msg, userId) {
    console.log(msg + " - " + userId || 'not user Id');
};
exports.log1 = log1;
var log2 = function (msg, userId) {
    console.log(msg + " - " + (userId || 'not user Id'));
};
exports.log2 = log2;
log1('hello'); //hello - undefined
log1('hello', 'bomin'); //hello - bomin
log2('hello'); //hello - not user Id (괄호 차이)
log2('hello', 'bomin'); //hello - bomin
var log3 = function (msg, context) {
    console.log(msg + " | " + context.aId + " | " + context.bId);
};
exports.log3 = log3;
log3('myMsg', { aId: "aaa", bId: "dawda" });
var defaultvalue = {
    aId: "aaaaaaa",
    bId: "bbbbbbbb"
};
exports.defaultvalue = defaultvalue;
var log4 = function (msg, context2) {
    if (msg === void 0) { msg = "data"; }
    console.log(msg + " | " + context2.aId + " | " + context2.bId);
};
exports.log4 = log4;
log4('a', { aId: "aaa", bId: "adw" });
log4(undefined, __assign(__assign({}, defaultvalue), { aId: "aaa" }));

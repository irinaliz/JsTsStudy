"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameTest2 = exports.nameTest = exports.myArray = exports.myType2 = exports.myType = exports.me2 = exports.me1 = void 0;
var me1 = {
    name: 'yc',
    age: 34,
};
exports.me1 = me1;
var me2 = {
    name: 'yc',
    age: 31,
};
exports.me2 = me2;
var myType = {
    name: "first"
};
exports.myType = myType;
var myType2 = {
    name: "first",
    age: 12
};
exports.myType2 = myType2;
//myType2.name = "not input zzz"
myType2.age = 20;
/*
readOnly 타입은 변수 선언&초기화 를 한 후엔 다른 값으로 초기화 할 수 없다
*/
var myArray = [1, 2, 3, 4, 5];
exports.myArray = myArray;
var nameTest = { name: "22" };
exports.nameTest = nameTest;
//nameTest.name = "12";
exports.nameTest = nameTest = { name: "12" };
console.log(nameTest.name);
var nameTest2 = { name: "22" };
exports.nameTest2 = nameTest2;
nameTest2.name = "123";
//nameTest2 = {name:"adaa"};
console.log(nameTest2.name);

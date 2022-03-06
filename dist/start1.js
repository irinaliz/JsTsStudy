"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msg2 = exports.msg = exports.world3 = exports.world2 = exports.world1 = void 0;
var world1 = function (msg) {
    console.log(msg);
};
exports.world1 = world1;
world1('hi world1!');
var world2 = function (msg) {
    console.log(msg);
};
exports.world2 = world2;
world2('hi world2!');
//함수 선언식의 경우 호이스팅
world3('hello world!');
function world3(msg) {
    console.log(msg);
}
exports.world3 = world3;
world3('hello world!3');
/*
호이스팅이란?

일반적으로 변수나 함수 등을 선언하여 메모리에 올린 뒤
선언 한 것을 호출 할 수 있지만

자바스크립트의 경우
먼저 호출 한 이름과 선언한 이름이 같아야 하고

간략하게 함수의 코드를 실행하기 전에 "함수 선언에 대한 메모리부터 할당"하므로
함수를 호출 하는 코드를 함수 선언보다 앞서 배치할 수 있다.

*/
/*

let world1 = function(msg?:string){
    console.log(msg);
}
let world2 = (msg?:string) => {
    console.log(msg);
}

함수 표현식과 화살표 표현식의 경우
변수 선언 한 다음 변수 내에 익명함수가 들어 있기 때문에
호이스팅이 불가하다.

*/
console.log(msg);
var msg;
exports.msg = msg;
exports.msg2 = msg2 = 20;
console.log(msg2);
var msg2;
exports.msg2 = msg2;

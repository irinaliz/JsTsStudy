
let world1 = function(msg?:string){
    console.log(msg);
}
world1('hi world1!');


let world2 = (msg?:string) => {
    console.log(msg);
}
world2('hi world2!');


//함수 선언식의 경우 호이스팅
world3('hello world!');

function world3(msg?:string) {
    console.log(msg);
}

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

msg2 = 20;
console.log(msg2);
var msg2;

/*
console.log(msg1);
msg1 = 25;
    변수 선언이 없어 사용이 불가하다
*/

/*
a = '크랜';
b = '베리';
console.log(a+ " " + b);
    Js의 경우 a, b 초기화와 선언을 동시에 한다음 console.log를 출력하지만
    Ts 쪽에서 오류를 잡아버림.
*/



export {world1, world2, world3, msg, msg2}
interface PeopleInterface {
    name: string
    age: number
}

const me1: PeopleInterface = {
    name: 'yc',
    age: 34,
}

type PeopleType = {
    name: string
    age: number
}

const me2: PeopleType = {
    name: 'yc',
    age: 31,
}



interface TestType {
    readonly name: string
}
let myType : TestType = {
    name : "first"
}
//myType.name = "not input zzz"


interface TestType2 {
    readonly name: string,
    age? : number
}
let myType2 : TestType2 = {
    name : "first",
    age: 12
}
//myType2.name = "not input zzz"
myType2.age = 20;

/*
readOnly 타입은 변수 선언&초기화 를 한 후엔 다른 값으로 초기화 할 수 없다
*/

let myArray: ReadonlyArray<number> = [1,2,3,4,5];



interface Test1 {
    readonly name: string
}
let nameTest :Test1 = {name:"22"}
//nameTest.name = "12";
nameTest = { name:"12"}
console.log(nameTest.name);

interface Test2 {
    name: string
}
const nameTest2 :Test2 = {name:"22"}
nameTest2.name = "123"
//nameTest2 = {name:"adaa"};
console.log(nameTest2.name);


/*
interface readOnly와 const의 차이

const는 상수 선언
interface는 타입 선언

interface는 변수 선언 후
readOnly 속성을 붙인 변수에다가
값을 초기화하면 readOnly라는 오류가 뜬다
예 * nameTest.name ="error"; //오류 readonly 속성입니다

하지만
nameTest = {name:"12"}를 할 경우
객체변수(nameTest)를 초기화 후 새로운 값을 넣기때문에 readOnly속성이 통하지 않는다.
readOnly가 적용되는 것은 변수 내의 키값 만 적용된다.


const는 선언 후 상수로 지정된다
객체를 상수로 선언 후 객체 내의 특정 키가 readOnly가 아닌 이상
nameTest2.name = "123"의 경우 오류가 없지만
상수에다 객체를 넣으면 오류가 생긴다.

즉 선언 후 객체자체도 못바꾸게, 키값도 바꾸지 못하게 하려면
interface의 키값들을 readOnly로 선언 후,
const로 선언해주면 된다
절대불변 변하지 않을 것.

*/

export{me1,me2,myType,myType2,myArray, nameTest,nameTest2}
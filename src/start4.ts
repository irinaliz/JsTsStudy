//상속개념
interface UserName { name: string }

interface UserAge extends UserName{ age : number }

interface UserInfo extends UserAge { birth?: number }

let userName: UserName = {name : "보민"}
let userAge: UserAge = {name : "보민",age : 26}
let user: UserInfo = {name : "보민",age : 26, birth: 19971234}

/*
    자바의 상속개념과 비슷한듯 하다
    내부구조를 정확히 몰라 단언할 수 없다.
    이때 상속받은 부모의 선언된 키값을 자식이 그대로 물려받는다
    그래서 UserAge는 name까지 기입해줘야한다.
*/

interface UserNameOver { name : string}
//interface UserAgeOver extends UserNameOver {name? : string, age: 26};
/*
interface를 상속받고 override를 하려했으나, 부모에선 name이 필수값이고
자식에선 선택사항이라고 하는 오류가 떴다

*/

export {userName,userAge,UserInfo,UserNameOver}
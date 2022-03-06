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
(function () {
    var log1 = function (msg, userId) {
        console.log(msg + " - " + userId || 'not user Id');
    };
    var log2 = function (msg, userId) {
        console.log(msg + " - " + (userId || 'not user Id'));
    };
    log1('hello'); //hello - undefined
    log1('hello', 'bomin'); //hello - bomin
    log2('hello'); //hello - not user Id (괄호 차이)
    log2('hello', 'bomin'); //hello - bomin
    var log3 = function (msg, context) {
        console.log(msg + " | " + context.aId + " | " + context.bId);
    };
    log3('myMsg', { aId: "aaa", bId: "dawda" });
    var defaultvalue = {
        aId: "aaaaaaa",
        bId: "bbbbbbbb"
    };
    var log4 = function (msg, context2) {
        if (msg === void 0) { msg = "data"; }
        console.log(msg + " | " + context2.aId + " | " + context2.bId);
    };
    log4('a', { aId: "aaa", bId: "adw" });
    log4(undefined, __assign(__assign({}, defaultvalue), { aId: "aaa" }));
    /*
    목표: msg(string|undefined) , context2(객체)
        두 매개변수에 디폴트 값을 지정하고 싶었음.

        msg 경우 ( msg? : string ="data", context2 : Context2 ) 로 하고 싶었으나
        log4()에서 매개변수가 부족하다고 오류가 뜸.
        다른 방법을 알기 전까진 undefined 일 경우 "data"를 기본값으로 해야겠음.

        context2 경우 type으로 객체를 미리 선언한 다음
        매개변수의 타입을 Context2로 지정해주었음.
        맨 처음엔 (context2 : Context2 = {aId:"a",bId:"b"}) 가 될줄 알았으나
        인수 값을 log4(undefined, {aId:"aaa"})로만 줄 경우 bId가 "undefined" 출력.

    해결방법 : 객체의 default 값 설정
        미리 defaultValue라는 객체변수를 선언해준 후
        함수 매개변수 설정은 (변수 : 타입) 그대로 설정 후

        인수 값에 {...변수이름,aId:"aaa"}로 전달
        "...변수이름" : 삼점문법(스프레드 연산자)
        객체나, 배열의 복사본을 { }나 []에서 비구조화로 풀어준 다음
        삼점문법과 컴마 뒤로 키 : 벨류를 기입하면
        비구조화 할당이 됨.

        aId : "aaaaaaa",
        bId : "bbbbbbbb" 라는 디폴트 값이

        aId: "aaa" - aId라는 키값이 똑같으므로
        Override 하게됨.
        최종적으로

        aId : "aaa",
        bId : "bbbbbbbb" 로 변경이 됨.
    */
});

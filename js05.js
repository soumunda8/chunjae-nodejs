//Arrow Function(화살표 함수) => 자바의 람다식과 같으며, ES6(2015) 부터 지원
/*
1. 매개변수가 없는 경우
function 함수명() { .... }
var 함수명 = function() { .... }
var 함수명 = () => { .... }

2. 매개변수가 하나인 경우
function 함수명(매개변수명) { .... }
var 함수명 = function(매개변수명) { .... }
var 함수명 = 변수명 => { .... }

3. 매개변수가 여러개인 경우
function 함수명(매개변수명1, 매개변수명2) { .... }
var 함수명 = function(매개변수명1, 매개변수명2) { .... }
var 함수명 = (변수명1, 변수명2) => { .... }

3. 반환이 있는 경우
function 함수명(매개변수명1, 매개변수명2) { return 반환식 또는 값; }
var 함수명 = function(매개변수명1, 매개변수명2) { return 반환식 또는 값; }
var 함수명 = (변수명1, 변수명2) => { return 반환식 또는 값; }
var 함수명 = (변수명1, 변수명2) => { 
    계산문 또는 연산문 또는 명령문;
    반환식 또는 값;
 }; /-> 여러줄일 땐 마지막에 세미콜론 넣어주기
*/
var arr = [75, 90, 80, 65];

// ES5의 함수 정의와 호출
var fnc1 = () => console.log("콘솔에 출력합니다.");             // 매개변수X, 반환X
var fnc2 = (a, b) => console.log("계산 결과 : " + (a + b));    // 매개변수O, 반환X
var fnc3 = () => 27*27;                                       // 매개변수X, 반환O
var fnc4 = (a, b) => a*10+b*9;                                // 매개변수O, 반환O
var fnc5 = arr.map( value => value * value );

fnc1();
fnc2(20, 12);
console.log("결과3 : " + fnc3());
console.log("결과4 : " + fnc4(13, 12));
console.log("결과5 : " + fnc5);
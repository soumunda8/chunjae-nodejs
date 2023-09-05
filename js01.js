var a = 20;         // 재선언 가능, 변수값 변경 가능
let b = 200;         // 재선언 불가능, 변수값 변경 가능
const c = 2000;       // 재선언 불가능, 변수값 변경 불가능

console.log("Hello~! NodeJS~!");
console.log("var a : " + a + ", let b : " + b + ", const c : " + c);
console.log(`var a : ${a}, let b : ${b}, const c : ${c}`);
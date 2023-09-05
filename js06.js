// 비구조 할당(Destructuring Assignment & Allocation)
// 배열과 같은 자료구조(reference type)를 단일 기억장소(primitive type)로 변경
const person = ['kim', 'lee', 'park', 'choi', 'oh'];    // 배열 구조
let p1 = person[0];
let p2 = person[1];
let p3 = person[2];

const member = {    // 자료구조
    id : "monstax",
    age : 20,
    addr : "서울",
    tel : "02-1234-5678"
}

let id = member.id;
let age = member.age;
let addr = member.addr;
let tel = member.tel;

// 배열 구조를 분해하여 비구조 할당 -> 단 갯수가 동일해야함
let [k1, k2, k3, k4, k5] = person;
[k2, k1, k4, k3, k5] = [k1, k2, k3, k4, k5];        // 비구조 할당의 값 교체

// UNDEFINED(비정의)
const [a, b, c] = ["JAVA", "C#"];
console.log(`a : ${a}, b : ${b}, c : ${c}`);        // c : undefined

// 초기값 할당
const [d, e, f = 'NODE'] = ["JAVA", "C#"];
console.log(`d : ${d}, e : ${e}, f : ${f}`);        // f : NODE

// 일부값 무시 -> REACT가 무시됨
const [g, , h , i] = ["NODE", "REACT", "VUE", "ANGULAR"];
console.log(`g : ${g}, h : ${h}, i : ${i}`);        // i : ANGULAR

// 객체의 분해 -> 대괄호 아니고 중괄호
let {m1, m2, m3, m4} = member;
let {o1, o2, o3, o4} = {age:member.age, id:member.id};
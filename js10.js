// String.raw 태그함수 사용 : 템플릿을 문자열로 변환하여 저장
let s1 = String.raw`xy\n${1+1}z`;
console.log(s1);

let title = "템플릿 사용법";
let content = "템플릿의 내용";
let s2 = String.raw`<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        ${content}
    </body>
</html>`;
console.log(s2);

// raw 프로퍼티의 사용
let item1 = "안녕";
let item2 = "자바스크립트";
let tag = function(strings, item1Val, item2Val) {
    console.log(strings);
    console.log(item1Val);
    console.log(item2Val);
    return strings.raw[0];
}
let str = tag`Hello ${item1} Node. ${item2}`;
console.log(str);
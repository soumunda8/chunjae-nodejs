let person = "손현우";
let age = 20;

//console.log(`당신의 이름은 ${person }이고, 나이는 ${age } 입니다.`);
let tag = function(Strings, personExp, ageExp) {    // 웹문서의 태그와 데이터를 바인딩할때 분리할수가 있음. / 웹문서에서 특정을 분리할 수 있음/
    console.log(Strings);       // [ '그 사람은 ', '은 ', ' 세 입니다.' ]
    console.log(personExp);     // 손현우
    console.log(ageExp);        // 20
};

let output = tag`그 사람은 ${person }은 ${age } 세 입니다.`;
// 문장과 데이터를 분리할 경우 활용
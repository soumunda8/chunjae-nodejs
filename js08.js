// 객체의 배열 : 배열 안에 객체가 있으며, 필드(항목)에도 배열이 존재
const ramenList = [
    {
        brand : '농심',
        items : ['신라면', '너구리', '짜파게티', '둥지냉면']
    },
    {
        brand : '삼양',
        items : ['삼양라면' , '불닭볶음면']
    },
    {
        brand : '오뚜기',
        items : ['진라면', '진짬뽕', '진짜장']
    },
    {
        brand : '팔도',
    }
];

/*
console.log(`구매가능한 ${ramenList[0].brand}라면 : ${ramenList[0].items}`);
console.log(`구매가능한 ${ramenList[1].brand}라면 : ${ramenList[1].items}`);
console.log(`구매가능한 ${ramenList[2].brand}라면 : ${ramenList[2].items}`);
console.log(`구매가능한 ${ramenList[3].brand}라면 : ${ramenList[3].items}`);

for(var i = 0; i < ramenList.length; i++) {
    console.log(`구매가능한 ${ramenList[i].brand}라면 : ${ramenList[i].items}`);
}
*/


var fn = function(strings, brand, items) {
    if(items === undefined) {
        return (brand + "라면 품절");
    } else {
        return (strings[0] + brand + strings[1] + items);
    }
}

/*
console.log(fn`구매가능한 ${ramenList[0].brand}라면 : ${ramenList[0].items}`);
console.log(fn`구매가능한 ${ramenList[1].brand}라면 : ${ramenList[1].items}`);
console.log(fn`구매가능한 ${ramenList[2].brand}라면 : ${ramenList[2].items}`);
console.log(fn`구매가능한 ${ramenList[3].brand}라면 : ${ramenList[3].items}`);
*/
for(var i = 0; i < ramenList.length; i++) {
    console.log(fn`구매가능한 ${ramenList[i].brand}라면 : ${ramenList[i].items}`);
}

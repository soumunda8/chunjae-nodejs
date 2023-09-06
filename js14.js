const fs = require("fs");
let content = "나도 알아 몬스타엑스";

// 비동기 방식 -> 무조건 화살함수를 넣어줘야 함.
/*
// 파일 생성
fs.writeFile("./monstaX2.txt", content, (err) => {
    fs.readFile("./monstaX2.txt", "UTF-8", (err, data) => {
        console.log(data);
    })
});
// 파일 내용 수정
fs.readFile("./monstaX2.txt", "UTF-8", (err, data) => {
    let con = data + ", 꺅~";
    fs.writeFile("./monstaX2.txt", con, (err) => {
        console.log(con);
    });
});
// 파일명 변경
fs.rename("./monstaX.txt", "./monstaX1.txt", (err) => {
    console.log("파일이름 변경");
});
// 파일 삭제
fs.unlink("./monstaX1.txt", (err) => {
    console.log("파일 삭제");
});
*/

// 동기 방식
/*
// 파일 생성
fs.writeFileSync("./monstaX3.txt", content);
var data = fs.readFileSync("./monstaX3.txt", "UTF-8");
console.log(data);
// 파일명 변경
fs.renameSync("./monstaX.txt", "./monstaX1.txt");
// 파일 삭제
fs.unlinkSync("./monstaX1.txt");
*/
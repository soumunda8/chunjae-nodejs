const fs = require("fs");

// 동기 방식 : 한번에 파일 전체 내용을 불러올 경우
var syncData = fs.readFileSync("./monstaX.txt", "UTF-8");
console.log(`동기 방식 : ${syncData }`);

// 비동기 방식 : 불러온 데이터 중에서 일부만 컨트롤하는 경우 -> filter등과 같은 처리 가능
fs.readFile("./monstaX.txt", "UTF-8", function(err, result){
    console.log(`비동기 방식 : ${result }`);
});
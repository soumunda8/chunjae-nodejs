const fs =require("fs");

// 비동기 방식
fs.readFile('./monstaX.txt', 'UTF-8',function(err, data) {
    if(err === undefined) {
        console.log(err);
    } else {
        console.log(data);
    }
});
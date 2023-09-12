let port = 4000;
const dbCon = require("./mariaDBConn");
const express = require("express");
const app = express();

let smaple = ["유기현", 7];
dbCon.updateSample(smaple)
    .then((msg) => {
        console.log(msg);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });
    
app.listen(port, () => {
    console.log(`Server Starting on ${port}`);
});
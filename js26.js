let port = 4000;
const dbCon = require("./mariaDBConn");
const express = require("express");
const app = express();

dbCon.getSampleOne(3)
    .then((rows) => {
        rows.map((tuple) => {
            console.log(tuple);
        });
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });
    
app.listen(port, () => {
    console.log(`Server Starting on ${port}`);
});
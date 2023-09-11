// body-parser 설치 : npm install body-parser

const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
const server = http.createServer(app);
const PORT = 4000;

let users = [
    {id : "kim", pw : "1234"},
    {id : "lee", pw : "1234"},
    {id : "park", pw : "1234"},
];

const findUserIndex = (id) => {
    let index = -1;     // 못 찾을 때 셋팅
    let len = users.length;
    for(let i = 0; i < len; i++) {
        if(users[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
};

// 회원가입 처리 함수
const register = (id, pw) => {
    let index = findUserIndex(id);
    if(index !== -1) return false;

    users.push({id, pw});   // 객체 배열 추가 => 자동 회원 가입
    return true;
};

// 로그인 처리 함수
const login = (id, pw) => {
    let index = findUserIndex(id);
    if(index === -1) return false;       // 로그인 실패 - 없는 아이디일 경우

    if(users[index].id === id && users[index].pw === pw) return true;   // 로그인 성공
    return false;       // 로그인 실패 - 비밀번호가 맞지 않는 경우
};

// 비밀번호 변경 처리 함수
const changePw = (id, pw) => {
    let index = findUserIndex(id);
    if(index === -1) return false;

    users[index].pw = pw;
    return true;
};

// 회원 탈퇴 처리 함수
const deleteUser = (id) => {
    let index = findUserIndex(id);
    if(index === -1) return false;

    users.splice(index, 1);         // 특정 인덱스부터 한개를 지우라는 의미
    return true;
};

// 정보 입력(Insert)
app.post("/", (req, res) => {   // 폼 전송
    let id = req.body.id;
    let pw = req.body.pw;

    if(!register(id, pw)) return res.status(401).send("중복 아이디 입니다.");
    res.send("회원 가입을 축하합니다.");
});

// 정보 조회(SelectOne)
app.get("/:id", (req, res) => { // GET => param
    let id = req.params.id;
    if(findUserIndex(id) === -1) return res.status(401).send("해당 회원이 존재하지 않습니다.");
    res.send(`${id}님, 안녕하세요.`);
});

// 정보 수정(Update)
app.put("/:id", (req, res) => {
    let id = req.params.id;
    let pw = req.body.pw;
    if(changePw(id, pw) === -1) return res.status(401).send("비밀번호 번호 변경이 실패했습니다.");
    res.send(`${id}님의 비밀번호 성공적으로 변경되었습니다.`);
});

// 정보 삭제(Delete)
app.delete("/:id", (req, res) => {
    let id = req.params.id;
    if(!deleteUser(id)) return res.status(401).send("회원 탈퇴에 실패했습니다.");
    res.send("회원 탈퇴에 성공했습니다.");
});

// 로그인
app.post("/login", (req, res) => {
    let id = req.body.id;
    let pw = req.body.pw;
    if(!login(id, pw)) return res.status(401).send("로그인에 실패했습니다.");
    res.send(`${id}님이 로그인하셨습니다.`);
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
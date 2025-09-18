const express = require("express");
const session = require("express-session");

const app = express();
app.use(express.json());

/*
    secret: 세션 ID 서명용 키
    resave: 매 요청시 세션 저장 여부 
    saveUninitialized: 초기 빈 세션 저장 여부
    cookie.secure: HTTPS에서만 전송
 */

app.use(
    session({
        secret: "!@#$%^&*()",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

app.post("/login", (req, res) => {
    const { userid, password } = req.body;
    //로그인 성공시!
    req.session.user = { userid };
    res.send(`로그인 성공: ${userid}`);
});
//req.body: 클라이언트에서 보낸 userid, password를 추출.
//req.session.user: 세션에 사용자 ID를 저장.
//res.send(...): 로그인 성공 메시지를 클라이언트에게 응답.

app.get("/me", (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).send("로그인이 필요합니다.");
    }
});
//req.session.user가 존재하면 → 로그인된 사용자로 판단
//사용자 정보(JSON)를 응답으로 반환
//세션에 사용자 정보가 없으면 → 로그인되지 않은 상태 → 401 Unauthorized 응답

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.send("로그아웃 되었습니다");
    });
});
//사용자가 로그아웃 요청을 보냈을 때 세션을 삭제

app.listen(3000, () => {
    console.log("서버 실행 중");
});

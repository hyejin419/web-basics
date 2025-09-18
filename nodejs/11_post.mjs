import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
//미들웨어역할, post 요청용
//html<form>을 통해 전달된 데이터를 처리할 수 있게 설정하는 미들웨어

app.post("/login", (req, res) => {
    const { userid, userpw } = req.body;
    console.log(`아이디: `, userid);
    console.log(`비밀번호: `, userpw);
    res.send(`아이디: ${userid}, 비밀번호${userpw}`);
});
app.listen(3000, () => {
    console.log("서버 실행 중");
});

/*
express.urlencoded(...)  : application/x-www-form-urlencoded 형태의 요청 본문을 해석
{ extended: true } : 중첩된 객체(예: user[address][city])를 해석할 수 있도록 허용
*/

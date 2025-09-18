import express from "express";

const app = express();
//express모듈을 불러오고, app 객체를 생성해서 서버 기능을 사용할 준비를 한다.

app.use((req, res, next) => {
    //모든 요청 방식(get, post...)에 항상 실행되는 미들웨어
    res.setHeader("node-msg", "Hi! node.js!"); //응답헤더에 node-msg라는 커스텀 헤더를 추가.
    next(); //다음 미들웨어나 라우터로 흐름을 넘긴다.
});
app.get("/", (req, res, next) => {
    //'GET /'요청에만 반응.
    res.send("<h2>익스프레스 서버로 만든 첫 번째 페이지</h2>");
    next();
});
app.get("/hello", (req, res, next) => {
    //'GET /hello' 요청에 반응.
    res.setHeader("Content-Type", "application/json"); //json데이터를 응답으로 보낸다.
    res.status(200).json({ userid: "apple", name: "김사과", age: 20 });
    next();
});
app.listen(3000, () => {
    console.log("서버 실행 중");
});

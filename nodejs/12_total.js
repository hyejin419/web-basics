const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
//127.0.0.1:3000/test.html
//app.use(express.static("public")); //실제 폴더 이름
app.use("/static", express.static("public")); //  /static url 접근, public 실제폴더

app.set("view engine", "ejs");
//views: C:\gpwls\Nodejs\views
app.set("views", path.join(__dirname, "views"));

// 127.0.0.1:3000/
app.get("/", (req, res) => {
    res.send("<h2>홈페이지입니다. 다양한 기능을 테스트해 보세요!</h2>");
});
//   127.0.0.1:3000/user/10
app.get("/user/:id", (req, res) => {
    res.send(`요청한사용자 ID는 ${req.params.id}입니다.`);
}); //param

app.get("/search", (req, res) => {
    const { keyword, number } = req.query;
    res.send(`검색어: ${keyword}, 숫자: ${number}`);
}); //쿼리 스트링 방식 -> param

app.post("/submit", (req, res) => {
    const { name, age } = req.body;
    res.send(`이름: ${name}, 나이: ${age}`);
}); //x-www-form-urlencoded

app.get("/hello", (req, res) => {
    res.render("hello", { name: "김사과" });
}); //(응답이 html 렌더링인 경우)브라우저로 실행
app.get("/posts", (req, res) => {
    const posts = [
        { title: "첫번째글", content: "내용입니다." },
        { title: "두번째글", content: "집가고 싶다" },
    ];
    res.render("posts", { posts });
}); //브라우저로 실행
app.listen(port, () => {
    console.log("서버 실행 중");
});

//body 는 POST, PUT에만 적용.

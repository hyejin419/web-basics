import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// __dirname 설정 (ES 모듈에서)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// ejs 템플릿 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 루트: login.html 제공
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// /login 경로 처리
app.get("/login", (req, res) => {
    const { userid, userpw } = req.query;
    res.render("result", { userid, userpw });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("서버 실행 중");
});

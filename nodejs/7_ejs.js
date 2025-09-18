//EJS는 HTML 안에서 JavaScript를 쉽게 쓸 수 있는 템플릿 엔진으로 백엔드에서 동적으로 HTML 페이지를 만들 때 유용.
//서버가 동작하는 파일
const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        //홈페이지 요청인지 확인
        // 템플릿 파일 경로
        const filePath = path.join(__dirname, "views", "index.ejs"); //현재 파일이 있는 디렉토리까지의 경로
        //현재 디렉토리에서 views/index.ejs 파일의 전체 경로를 생성

        //EJS렌더링(html로 변환)
        ejs.renderFile(filePath, { name: "김사과" }, (err, data) => {
            //전체 구조: ejs.renderFile(템플릿 파일 경로, 전달할 데이터, 콜백_함수);
            //"index.ejs 파일을 불러와서 name에 '김사과'를 넣고 HTML로 바꾼 다음,
            // 에러가 있으면 처리하고, 성공하면 그 결과를 data에 담아 응답으로 보내자."
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                // writeHead: Node.js에서 HTTP 응답 헤더를 설정할 때 사용하는 메서드
                //res.writeHead(응답상태코드, 브라우저에게 알려주는 부가 정보)
                //브라우저에게 말함: "500 서버오류야, 그리고 그냥 텍스트 형식으로 알려줄게!"
                res.end("서버 오류");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            //"응답 성공이야(200), 그리고 HTML 형식의 데이터를 보낼 거야!"
            res.end(data);
        });
    } else if (req.url === "/users") {
        const filePath = path.join(__dirname, "views", "users.ejs");
        const users = ["김사과", "반하나", "이메론"];
        ejs.renderFile(filePath, { users }, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("서버 오류");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/posts") {
        const filePath = path.join(__dirname, "views", "posts.ejs");
        const posts = [
            { title: "첫 글", content: "안녕하세요!" },
            { title: "둘째 글", content: "node.js 재미있어요?" },
        ];
        ejs.renderFile(filePath, { posts }, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("렌더링 오류");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("페이지를 찾을 수 없습니다.");
    }
});

server.listen(3000, () => {
    console.log("서버 실행 중");
});

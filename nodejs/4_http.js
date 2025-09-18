const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    // req: 요청 정보 (url, method, headers 등)
    // res: 응답 처리 객체
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("home");
    } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("mypage");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("not found");
    }
});
server.listen(3000, () => {
    console.log("서버 실행 중");
});
//http://localhost:3000 or 127.0.0.1:3000

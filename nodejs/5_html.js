//서버 구축
const http = require("http");
const fs = require("fs"); //fs: file system

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("test.html", (err, data) => {
            //fs.readFile("test.html", ...): test.html 파일을 비동기적으로 읽는다.
            //err가 있으면 data에 내용이 담긴다.
            if (err) {
                res.writeHead(500); //http응답 상태 코드를 500(서버 내부 오류)로 설정
                return res.end("파일 읽기 오류");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            //http 응답 상태 코드를 200(성공)으로 설정하고,
            // 응답 헤더에 "Content-Type"을 "text/html" 로 지정한다.(=클라이언트에게 HTML 문서를 보낸다)
            res.end(data);
            //fs.readFile로 읽어온 html파일 내용(data)을 응답 본문으로 전송하고, 응답을 종료
        });
    } else {
        res.writeHead(404); //페이지 찾을 수 없음
        res.end("not found");
    }
});

server.listen(3000, () => {
    console.log("서버 실행 중");
});
//서버를 실제로 동작시키는 부분으로
//서버를 3000번 포트에서 실행하도록 설정 (=http://localhost:3000)
//서버가 성공적으로 실행되었을 때 "서버 실행 중" 이라는 메시지를 터미널에 출력.

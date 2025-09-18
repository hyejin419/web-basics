const http = require("http");
//node.js 내장 모듈인 http모듈을 불러온다.

const server = http.createServer((req, res) => {
    //http서버 생성. 요청이 들어오면 응답 처리하는 콜백 함수 실행.
    if (req.url == "/api/user") {
        const user = {
            //user라는 객체 생성
            name: "김사과",
            age: 20,
            job: "개발자",
        }; //이 객체를 응답으로 보낼 것이다.
        res.writeHead(200, { "Content-Type": "application/json" });
        //응답 상태 코드를 200(성공)으로 설정하고, 응답의 내용이 JSON 형식이라는 것을 브라우저에 알려준다.
        res.end(JSON.stringify(user));
        //자바스크립트 객체 user를 JSON 문자열로 변환해서 응답으로 보낸다.
    } else {
        res.writeHead(404);
        res.end("not found");
    }
});
server.listen(3000, () => {
    console.log("서버 실행 중");
});
//즉, http://localhost:3000/api/user 로 접속하면 사용자 정보를 JSON형태로 응답하고, 다른 주소는 not found를 반환한다.

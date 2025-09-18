const http = require("http");

const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Java" },
    { name: "Python" },
    { name: "AI" },
    { name: "Node.js" },
    { name: "MySQL" },
    { name: "mongoDB" },
];
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //모든 포트번호에 대해서 모두 허용.
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const url = req.url;
    const method = req.method; //메소드: host, get방식 등..
    if (method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(skills));
    }
});
server.listen(3000, () => {
    console.log("서버 실행 중");
});

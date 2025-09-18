import express from "express";
import userRouter from "./routes/user.mjs"; //가져다 쓴다...
import postRouter from "./routes/post.mjs";

const app = express();
app.use(express.json());

//127.0.0.1:3000/users
app.use("/users", userRouter); //미들웨어로 등록
//127.0.0.1:3000/posts
app.use("/posts", postRouter);

app.listen(3000, () => {
    console.log("서버 실행 중");
});

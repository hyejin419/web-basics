import express from "express";
import { swaggerUi, swaggerSpec } from "./swagger.js";
import authRouter from "./routes/auth.js";

const app = express();
app.use(express.json());

app.use("/auth", authRouter); // 회원 API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger 문서

app.listen(3000, () => {
    console.log("서버 실행 중 👉 http://localhost:3000");
    console.log("Swagger 문서 👉 http://localhost:3000/api-docs");
});

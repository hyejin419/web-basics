import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "회원 API",
            version: "1.0.0",
            description: "회원 기능 API 문서 (가입/로그인/수정/탈퇴)",
        },
    },
    apis: ["./routes/*.js"], // 주석에서 문서 읽을 위치
});

export { swaggerUi, swaggerSpec };

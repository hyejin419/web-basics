import express from "express";
const router = express.Router();

// 예시용 메모리 저장소
let users = [];

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 회원가입
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userid
 *               - password
 *               - email
 *               - name
 *               - phone
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 성공
 *       400:
 *         description: 필수 항목 누락
 *       409:
 *         description: 이미 존재하는 아이디
 */
router.post("/signup", (req, res) => {
    const { userid, password, email, name, phone } = req.body;
    if (!userid || !password || !email || !name || !phone) {
        return res.status(400).json({ message: "모든 필드를 입력해주세요." });
    }
    const exists = users.find((u) => u.userid === userid);
    if (exists)
        return res.status(409).json({ message: "이미 존재하는 아이디입니다." });

    users.push({ userid, password, email, name, phone });
    res.status(201).json({ message: "회원가입 성공!" });
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userid
 *               - password
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 *       401:
 *         description: 로그인 실패
 */
router.post("/login", (req, res) => {
    const { userid, password } = req.body;
    const user = users.find(
        (u) => u.userid === userid && u.password === password
    );
    if (!user)
        return res.status(401).json({ message: "아이디 또는 비밀번호 오류" });

    res.json({
        message: "로그인 성공",
        user: { userid: user.userid, name: user.name },
    });
});

/**
 * @swagger
 * /user:
 *   put:
 *     summary: 회원정보 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userid
 *             properties:
 *               userid:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: 정보 수정 완료
 *       404:
 *         description: 사용자 없음
 */
router.put("/user", (req, res) => {
    const { userid, email, name, phone } = req.body;
    const user = users.find((u) => u.userid === userid);
    if (!user)
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });

    user.email = email || user.email;
    user.name = name || user.name;
    user.phone = phone || user.phone;

    res.json({ message: "정보 수정 완료", user });
});

/**
 * @swagger
 * /user:
 *   delete:
 *     summary: 회원 탈퇴
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userid
 *             properties:
 *               userid:
 *                 type: string
 *     responses:
 *       200:
 *         description: 탈퇴 완료
 *       404:
 *         description: 사용자 없음
 */
router.delete("/user", (req, res) => {
    const { userid } = req.body;
    const index = users.findIndex((u) => u.userid === userid);
    if (index === -1)
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });

    users.splice(index, 1);
    res.json({ message: "탈퇴 완료" });
});

export default router;

import bcrypt from "bcrypt";

const password = "apple1004";
const saltRounds = 10;

// 1. 비밀번호 해시화
async function hashPassword(password) {
    //비밀번호를 받아 비동기적으로 해시하는 함수
    const hashed = await bcrypt.hash(password, saltRounds);
    // bcrypt 라이브러리의 hash함수를 사용하여 비밀번호 해싱.
    //saltRounds는 해시 강도를 조정하는 값으로, 숫자가 클수록 안전하지만 해시 연산이 느려진다.
    console.log("해시된 비밀번호: ", hashed);
    return hashed;
}

// 2. 비밀번호 검증
async function verifyPassword(inputPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword); //비교
    console.log("비밀번호 일치 여부: ", isMatch);
    return isMatch;
}

async function runExample() {
    const hashed = await hashPassword(password);

    await verifyPassword("apple1004", hashed);
    await verifyPassword("apple1000", hashed);
}

runExample();

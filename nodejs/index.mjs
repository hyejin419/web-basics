import {
    getUsers,
    createUser,
    updateUserAddress1,
    deletedUser,
} from "./userRepository.mjs";
import { db } from "./db.mjs";

async function main() {
    //select
    const users = await getUsers();
    console.log("사용자 목록: ", users);

    // insert
    const newUserId = await createUser(
        "hong",
        "1012",
        "홍홍",
        "010-1234-1234",
        "hong@hong.com",
        "여자",
        "000000",
        "0000000",
        "12346",
        "서울 서초구 양재동",
        "11-79",
        "11층"
    );
    console.log("새 사용자 ID:", newUserId);

    /*
    const updateCount = await updateUserEmail(1, "apple@naver.com");
    console.log("수정된 사용자 수: ", updateCount);
    await db.end(); //pool종료 (보통 사용하지 않음)
*/

    const updateCount = await updateUserAddress1(8, "경기도 안양시 동안구");
    console.log("수정된 사용자 수:", updateCount);
    await db.end();

    //delete
    const deletedCount = await deletedUser(10);
    console.log("삭제된 사용자 수: ", deletedCount);

    await db.end(); //pool종료 (보통 사용하지 않음)
}

main();

//npm i mysql2
//node index.mjs

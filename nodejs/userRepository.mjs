import { db } from "./db.mjs";

export async function getUsers() {
    //db.query("select * from member")의 반환은 [rows, fields]. 분해할당하여 rows배열만 도출.
    const [rows] = await db.query("select * from member");
    //console.log(rows);
    return rows; //결과값 리턴
}

export async function createUser(
    userid,
    userpw,
    name,
    hp,
    email,
    gender,
    ssn1,
    ssn2,
    zipcode,
    address1,
    address2,
    address3
) {
    const [result] = await db.query(
        "insert into member (userid, userpw, name, hp, email, gender, ssn1, ssn2, zipcode, address1, address2, address3) values (?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?)",
        [
            userid,
            userpw,
            name,
            hp,
            email,
            gender,
            ssn1,
            ssn2,
            zipcode,
            address1,
            address2,
            address3,
        ]
    );
    return result.insertId;
}

/*
//update
export async function updateUserEmail(idx, newEmail) {
    const [result] = await db.query("update member set email=? where idx=?", [
        newEmail,
        idx,
    ]);
    return result.affectedRows; //몇 개의 행이 수정됐는지 알 수 있다.
}
    */

export async function updateUserAddress1(idx, newAddress1) {
    const [result] = await db.query(
        "update member set address1=? where idx=?",
        [newAddress1, idx]
    );
    return result.aggectedRows;
}

//delete
export async function deletedUser(idx) {
    const [result] = await db.query("delete from member where idx=?", [idx]);
    return result.affectedRows; //몇 개의 행이 삭제됐는지
}

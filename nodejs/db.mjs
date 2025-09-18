import mysql from "mysql2";
import { config } from "./config.mjs";

const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password,
}); //mysql.createConnection 보다 빠름

export const db = pool.promise();

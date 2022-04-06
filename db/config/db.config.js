import mysql from "mysql2/promise";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "0376",
//   database: "Users",
// });

const opts = {
  host: "localhost",
  user: "root",
  password: "0376",
  database: "Users",
};

const pool = mysql.createPool(opts);

export { pool };

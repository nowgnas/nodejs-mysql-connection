import { pool } from "./config/db.config";

// 데이터베이스 조작을 위한 쿼리
// 아래 코드들을 좀 뜯어봐야 유연하게 사용 가능할것 같아요
// 함수를 나눠서 작성했는데 이 부분도 class로 작성하면 좋을거 같아요

// 테이블의 모든 데이터 조회
const getAllData = async ({ tableName }) => {
  try {
    // pool을 사용한 connection을 찾아보기
    const connection = await pool.getConnection(async (conn) => conn);
    // sql 쿼리
    const sql = `select * from ${tableName}`;

    // 트랜잭션을 사용
    // https://iamzombie.tistory.com/38: 간단한 트랜잭션 설명
    await connection.beginTransaction();
    const [rows] = await connection.query(sql);
    await connection.commit();
    connection.release();
    return rows;
  } catch (error) {}
};

//  테이블에 데이터 추가
const insertData = async ({ tableName, id, name }) => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    // ?를 사용
    const sql = `insert into ${tableName}(id, name) values(?,?) `;

    await connection.beginTransaction();
    // ?에 데이터 넣기
    const [rows] = await connection.query(sql, [id, name]);
    await connection.commit();
    connection.release();
    return rows;
  } catch (error) {}
};

// sql 쿼리를 export
export { getAllData, insertData };

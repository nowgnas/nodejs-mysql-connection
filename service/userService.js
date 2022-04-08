import { Query } from "../db";

//  로직을 처리하는 service
class userService {
  // 테이블의 모든 데이터 조회
  // 테이블 이름을 입력으로 받음
  static async showAllData({ tableName }) {
    const data = await Query.select({ tableName });
    return data;
  }

  // 테이블에 데이터 추가
  // id는 uuid사용할까요??
  // 테이블 이름과 사용자의 이름을 받아와 요청
  static async insertData({ tableName, name }) {
    const id = Number(205);
    const inserted = await Query.insert({ tableName, id, name });
    return inserted;
  }
}

export { userService };

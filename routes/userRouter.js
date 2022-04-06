import { Router } from "express";
import { userService } from "../service/userService";

const userRouter = Router();

// 테이블의 모든 데이터를 조회하는 요청
// 요청후 출력되는 모양
// [
//   { id: 203, name: "lee" },
//   { id: 205, name: "park" },
//   { id: 205, name: "kim" },
//   { id: 205, name: "lim" },
// ];

userRouter.get("/", async (req, res) => {
  const tableName = "User";
  const data = await userService.showAllData({ tableName });

  res.status(200).json(data);
});

// 테이블에 데이터 추가하기
userRouter.post("/insert/:id", async (req, res) => {
  const tableName = "User";
  const name = req.params.id;
  const insertedData = await userService.insert({ tableName, name });
  res.json(insertedData);
});

export { userRouter };

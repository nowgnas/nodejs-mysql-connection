import express from "express";
import { userRouter } from "./routes/userRouter";

const app = express();

// userRouter를 사용합니다
app.use(userRouter);

app.listen(5000, () => console.log("500 server is running"));

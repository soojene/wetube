import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from './middlewares';
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter"; 
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express() 

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); //url이 /user/~으로 시작해서 여러개로 나눠서 묶어 놓을 수 있음
app.use(routes.videos, videoRouter);

export default app;
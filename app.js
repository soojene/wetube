import "core-js";
import express from "express";
import morgan from "morgan";
// import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
// import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from './middlewares';
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter"; 
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

import "./passport";

const app = express() 
// const MongoStore = require("connect-mongo").default;

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
    });
// app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: true,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URL })

    })
  );
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); //url이 /user/~으로 시작해서 여러개로 나눠서 묶어 놓을 수 있음
app.use(routes.videos, videoRouter);

export default app;
// 노드 모듈에서 import 하고,
//import한 것을 실행execute한 app만들고, 
//만든 app이 포트를 listen하게 하고 함수도 실행시키게 함

import "core-js";
import express from "express";
const app = express() 

const PORT = 4000;

const handleLinstening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello from home");
// console.log(req); 콘솔로 request의 함수들을 확인 가능

const handleProfile = (req, res) => res.send("you are my profile page");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleLinstening);
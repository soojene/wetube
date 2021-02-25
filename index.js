// 노드 모듈에서 import 하고,
//import한 것을 실행execute한 app만들고, 
//만든 app이 포트를 listen하게 하고 함수도 실행시키게 함

const express = require('express') 
const app = express() 

const PORT = 4000;

function handleLinstening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleLinstening);
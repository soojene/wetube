import "./db";
import "./models/Comment";
import "./models/Video";
import dotenv from "dotenv";

import app from "./app"; //export default일 경우

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`💟 Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
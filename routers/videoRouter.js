import express from "express";
import routes from "../routes";
import { 
    deleteVideo, 
    editVideo, 
    getVideoUpload, 
    postVideoUpload, 
    videoDetail 
} from "../controllers/videoController";


const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, postVideoUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);


export default videoRouter;
import express from "express";
import routes from "../routes";
import { 
    deleteVideo, 
    editVideo, 
    videoDetail, 
    videos,
    videoUpload, 
} from "../controllers/videoController";


const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.videoUpload, videoUpload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
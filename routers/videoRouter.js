import express from "express";
import routes from "../routes";
import { 
    deleteVideo,
    getEditVideo,  
    getVideoUpload,
    postEditVideo, 
    postVideoUpload, 
    videoDetail 
} from "../controllers/videoController";
import { uploadVideoMiddleware } from '../middlewares';


const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, getVideoUpload);
videoRouter.post(routes.videoUpload, uploadVideoMiddleware, postVideoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);


export default videoRouter;
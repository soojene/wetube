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
import { onlyPrivate, uploadVideoMiddleware } from '../middlewares';


const videoRouter = express.Router();

videoRouter.get(routes.videoUpload, onlyPrivate, getVideoUpload);
videoRouter.post(routes.videoUpload, onlyPrivate, uploadVideoMiddleware, postVideoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);


export default videoRouter;
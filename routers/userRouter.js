import express from "express";
import routes from "../routes";
import { 
    chagePassword, 
    userDetail, 
    userProfile, 
    users 
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userProfile, userProfile);
userRouter.get(routes.chagePassword, chagePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
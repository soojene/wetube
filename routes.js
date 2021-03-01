//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//User

const USERS = "/user";
const USER_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL= "/:id";

//Video
const VIDEOS = "/videos";
const VIDEO_UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    users:USERS,
    userDetail:USER_DETAIL,
    userProfile:USER_PROFILE,
    chagePassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    videoUpload:VIDEO_UPLOAD,
    videoDetail:VIDEO_DETAIL,
    editVideo:EDIT_VIDEO,
    deleteVideo:DELETE_VIDEO
}

export default routes;
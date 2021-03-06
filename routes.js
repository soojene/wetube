//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//User

const USERS = "/users";
const USER_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL= "/:id";
const ME = "/me";

//Video
const VIDEOS = "/videos";
const VIDEO_UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

//kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

const routes = {
    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    users:USERS,
    userDetail:(id)=>{
        if(id){
            return `/users/${id}`;
        }else{
            return USER_DETAIL;
        }
    },
    editProfile:USER_PROFILE,
    changePassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    videoUpload:VIDEO_UPLOAD,
    videoDetail:(id)=>{
        if(id){
            return `/videos/${id}`;
        }else{
            return VIDEO_DETAIL;
        }
    },
    editVideo:(id)=>{
        if(id){
            return `/videos/${id}/edit`;
        }else{
            return EDIT_VIDEO;
        }
    },
    deleteVideo:(id)=>{
        if(id){
            return `/videos/${id}/delete`;
        }else{
            return DELETE_VIDEO;
        }
    },
    gitHub:GITHUB,
    githubCallback: GITHUB_CALLBACK,
    me: ME,
    kakao: KAKAO,
    kakaoCallback: KAKAO_CALLBACK
}

export default routes;
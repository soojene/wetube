import multer from 'multer';
import routes from "./routes";

const multerVideo = multer({dest: "uploads/videos/"});

//미들웨어를 이용해서 전역에서 사용가능한 변수를 추가하는 방법. 
//locals.이름--> 이름으로 다른곳에서 변수처럼 사용가능. 
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    // res.locals.user = {
    //     isAuthenticated: true, //로그인상태 or not
    //     id: 7
    // };
    res.locals.user = req.user || null;
    // console.log(req.user); user의 쿠키
    next(); //만든 미들웨어 함수에는 next() 필수!
};

export const onlyPublic = (req, res, next) => {
    if (req.user) {
      res.redirect(routes.home);
    } else {
      next();
    }
  };
  
  export const onlyPrivate = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect(routes.home);
    }
  };

//파일타입의 name이 "videoFile"이고, single은 그 파일 하나만 사용한다는 의미.
export const uploadVideoMiddleware = multerVideo.single("videoFile");
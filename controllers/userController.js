import passport from "passport";
import routes from '../routes';
import User from "../models/User";

export const getJoin = (req, res) =>{
    res.render("join", {pageTitle: "Join"});
};

export const postJoin = async (req, res, next) =>{
    // console.log(req.body); 폼을 제출하면 서버에 bodyParser를 통해 제출한 폼에 대한 정보가 도착
    const{
        body: {name, email, password, vPassword}
    } = req;
    if (password !== vPassword){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else{
        try {
            const user = await User({
              name,
              email
            });
            await User.register(user, password);
            next();
          } catch (error) {
            console.log(error);
            res.redirect(routes.home);
          }
    }
};

export const getLogin = (req, res) => res.render("login", {pageTitle: "Login"});

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
  });

export const githubLogin = passport.authenticate("github"); 

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.name = name;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};
  
export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (_, __, profile, done) => {
  const {
    id,
    username,
    _json: { email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    console.log(username);
  if (user) {
    user.kakaoId = id;
    user.name = username;
    user.save();
      return done(null, user)
    
  }
    const newUser = await User.create({
      name: username,
      email,
      roles: ['authenticated'],
      provider: 'kakao'
    })
      return done(null, newUser)
      
    }catch(err) {
        return done(err)
      }
};


export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home)
};

export const getMe = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};

// export const users = (req, res) => res.render("users", {pageTitle: "User"});
export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditProfile = (req, res) => {
  console.log(req.user);
  res.render("editProfile", {pageTitle: "Edit Profile"});
};

export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});
import routes from '../routes';

export const getJoin = (req, res) =>{
    res.render("join", {pageTitle: "Join"});
};

export const postJoin = (req, res) =>{
    // console.log(req.body); 폼을 제출하면 서버에 bodyParser를 통해 제출한 폼에 대한 정보가 도착
    const{
        body: {name, email, password, vPassword}
    } = req;
    if (password !== vPassword){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else{
        //to do: register user
        //to do: log user in
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => res.render("login", {pageTitle: "Login"});

export const postLogin = (req, res) =>{
    //아이디 비번체크, 오류체크
    res.redirect(routes.home);
};

export const logout = (req, res) => res.render("logout", {pageTitle: "Logout"});
export const users = (req, res) => res.render("users", {pageTitle: "User"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});
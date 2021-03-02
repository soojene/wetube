export const home = (req, res) => res.render("home"); //"render()안에 home을 적어줌(불러오고싶은 home.pug의 파일 이름)"
export const search = (req, res) => res.render("search");
export const videos = (req, res) => res.render("videos");
export const videoUpload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");
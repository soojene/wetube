//"render()안에 home을 적어줌(불러오고싶은 home.pug의 파일 이름)"
import {videos} from "../db";
import routes from '../routes';

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videos});
}; 

export const search = (req, res) => {
    const {query: { term:searchingBy }} = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos});
}

export const getVideoUpload = (req, res) => res.render("upload", {pageTitle: "Video Upload"});

export const postVideoUpload = (req, res) => {
    const { body: {
        file,
        title,
        description} } = req;
    console.log(req.body);
    //to do: upload video and save it
    // res.redirect(routes.videoDetail());
    res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});
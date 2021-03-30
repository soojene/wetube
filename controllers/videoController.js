//"render()안에 home을 적어줌(불러오고싶은 home.pug의 파일 이름)"
import routes from "../routes";
import Video from "../models/Video"

export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
    res.render("home", {pageTitle: "Home", videos});
    } catch(error){
        console.log(error);
        res.render("home", {pageTitle: "Home", videos:[]});
    }
}; 

export const search = (req, res) => {
    const {query: { term:searchingBy }} = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos:[]});
}

export const getVideoUpload = (req, res) => res.render("upload", {pageTitle: "Video Upload"});

export const postVideoUpload = async (req, res) => {
    const {
      body: { title, description },
      file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
      });
    //   console.log(newVideo);
      res.redirect(routes.videoDetail(newVideo.id));
    };

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});
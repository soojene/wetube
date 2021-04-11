import routes from "../routes";
import Video from "../models/Video"

export const home = async(req, res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1}); //id로 순서 정렬
    res.render("home", {pageTitle: "Home", videos});
    } catch(error){
        console.log(error);
        res.render("home", {pageTitle: "Home", videos:[]});
    }
}; 

export const search = async (req, res) => { 
    const {
        query: { term:searchingBy }
    } = req;
    let videos =[];
    try {
        videos = await Video.find({ title: {$regex: searchingBy, $options: "i" } })
    } catch (error) {
        console.log(error);
    }
    res.render("search", {pageTitle: "Search", searchingBy, videos});
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
      // console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
    };

export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const clickedVideo = await Video.findById(id);
    // console.log(clickedVideo);
    res.render("videoDetail", {pageTitle: clickedVideo.title, clickedVideo });
    } catch (error) {
        // console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: {id} 
    } = req;
    try {
        const videoEdit = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${videoEdit.title}`, videoEdit });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: {id},
        body: {title, description} 
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, {title, description});
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id});
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
};
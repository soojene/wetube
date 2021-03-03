//"render()안에 home을 적어줌(불러오고싶은 home.pug의 파일 이름)"
export const home = (req, res) => res.render("home", {pageTitle: "Home"}); 

export const search = (req, res) => {
    const {query: { term:searchingBy }} = req;
    res.render("search", {pageTitle: "Search", searchingBy});
}

export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});

export const videoUpload = (req, res) => res.render("upload", {pageTitle: "Video Upload"});

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});
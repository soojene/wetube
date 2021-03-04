import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "title is reqired"
    },
    description: String,
    video: {
        type: Number,
        default:0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
});

const model = mongoose.model("video", videoSchema);

export default model;
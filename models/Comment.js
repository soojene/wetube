import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    });

    const model = mongoose.model("Comment", commentSchema);
    export default model;
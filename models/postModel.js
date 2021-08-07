import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String
    },
    excrept: {
        type: String
    },
    likeCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Post = mongoose.model("posts", PostSchema);
export default Post;
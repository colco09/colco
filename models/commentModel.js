import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    post_id: {
        type: String
    },
    comment: {
        type: String
    },
    name: {
        type: String
    }
}, { timestamps: true });

const Comment = mongoose.model("comments", CommentSchema);
export default Comment;
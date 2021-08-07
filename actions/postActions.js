import Post from '../models/postModel.js';

export const createPost = async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            excrept: req.body.excrept,
            image: req.body.image,
        });

        const post = await newPost.save();

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const increaseLike = async (req, res) => {
    try {
        const newPost = new Post({
            likeCount: req.body.likeCount,
        });

        const post = await newPost.save();
        res.status(200).json(post.likeCount);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });

            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        try {
            await post.delete()
            res.status(200).json("Post deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};
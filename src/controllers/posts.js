import path from "path";

import Posts from "../models/postsModel.js";

export default {
  getPosts(req, res) {
    Posts.fetchAll((posts) => {
      res.render(path.resolve("src/views/posts"), {
        posts: posts,
      });
    });
  },

  getPost(req, res) {
    const postId = req.params.postId;

    Posts.getPostById(postId, (post) => {
      res.render(path.resolve("src/views/post-detail"), {
        post: post,
      });
    });
  },
};

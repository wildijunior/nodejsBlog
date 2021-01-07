import path from "path";

import Posts from "../models/postsModel.js";

export default {
  getHome(req, res) {
    Posts.fetchAll((posts) => {
      res.render(path.resolve("src/views/home"), {
        posts: posts,
      });
    });
  },
};

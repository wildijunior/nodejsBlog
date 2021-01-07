import path from "path";

import Posts from "../models/postsModel.js";

export default {
  getCompose(req, res) {
    res.render(path.resolve("src/views/compose"));
  },

  postCompose(req, res) {
    const title = req.body.titlePost;
    const body = req.body.bodyPost;

    const posts = new Posts(title, body);
    posts.save();
    res.redirect("/");
  },
};

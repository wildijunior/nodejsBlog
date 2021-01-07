import express from "express";
import bodyParser from "body-parser";
import path from "path";

import homeRoute from "../routes/home.js";
import postsRoute from "../routes/posts.js";
import aboutRoute from "../routes/about.js";
import contactRoute from "../routes/contact.js";
import composeRoute from "../routes/compose.js";

const app = express();

export default () => {
  app.set("view engine", "ejs");
  app.use(express.static(path.resolve("src/public")));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(homeRoute);
  app.use("/compose", composeRoute);
  app.use(postsRoute);
  app.use(aboutRoute);
  app.use(contactRoute);

  return app;
};

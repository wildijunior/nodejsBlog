import Router from "express";
import postsController from "../controllers/posts.js";

const routes = Router();

routes.get("/posts", postsController.getPosts);
routes.get("/posts/:postId", postsController.getPost);

export default routes;

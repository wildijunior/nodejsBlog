import Router from "express";
import aboutController from "../controllers/about.js";

const routes = Router();

routes.get("/about", aboutController.getAbout);

export default routes;

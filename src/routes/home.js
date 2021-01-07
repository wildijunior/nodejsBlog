import Router from "express";
import homeController from "../controllers/home.js";

const routes = Router();

routes.get("/", homeController.getHome);

export default routes;

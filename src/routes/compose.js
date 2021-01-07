import Router from "express";
import composeController from "../controllers/compose.js";

const routes = Router();

routes.get("/", composeController.getCompose);
routes.post("/", composeController.postCompose);

export default routes;

import Router from "express";
import contactController from "../controllers/contact.js";

const routes = Router();

routes.get("/contact", contactController.getContact);

export default routes;

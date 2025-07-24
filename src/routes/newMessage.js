import { Router } from "express";
import { newMessageController } from "../controllers/newMessageController.js";

export const newMessageRouter = Router();

newMessageRouter.get("/", newMessageController.get);
newMessageRouter.post("/", newMessageController.post);

import { Router } from "express";
import { newMessageController } from "../controllers/newMessageController.js";
import { newMessageValidation } from "../middlewares/messageValidator.js";

export const newMessageRouter = Router();

newMessageRouter.get("/", newMessageController.get);
newMessageRouter.post("/", newMessageValidation, newMessageController.post);

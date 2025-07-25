import { Message } from "../models/messageSchema.js";
import { getInitials } from "../utils/getInitials.js";
import { validationResult } from "express-validator";

export const newMessageController = {
  get: (req, res) => {
    res.render("newMessage", { title: "New Message" });
  },
  post: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("newMessage", {
        title: "New Message",
        errors: errors.array(),
        data: req.body,
      });
    }

    const user = req.body.name;
    const text = req.body.text;
    const initials = getInitials(user);

    const newMessage = new Message({
      text,
      user,
      initials,
      createdAt: new Date(),
    });

    await newMessage.save();

    res.redirect("/");
  },
};

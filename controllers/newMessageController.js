import { Message } from "../models/messageSchema.js";
import { getInitials } from "../utils/getInitials.js";
import { validationResult } from "express-validator";

export const newMessageController = {
  get: (req, res) => {
    const userSession = req.session.user;

    res.render("newMessage", { title: "New Message", user: userSession });
  },
  post: async (req, res) => {
    const userSession = req.session.user;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("newMessage", {
        title: "New Message",
        errors: errors.array(),
        data: req.body,
        user: userSession,
      });
    }

    const user = req.body.name;
    const text = req.body.text;
    const initials = getInitials(user);

    req.session.user = req.body.name;

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

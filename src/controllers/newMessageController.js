import { Message } from "../models/messageSchema.js";
import { getInitials } from "../utils/getInitials.js";

export const newMessageController = {
  get: (req, res) => {
    res.render("newMessage", { title: "New Message" });
  },
  post: async (req, res) => {
    const text = req.body.text;
    const user = req.body.name;
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

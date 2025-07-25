import { Message } from "../models/messageSchema.js";

export const indexController = {
  get: async (req, res) => {
    const messages = await Message.find();

    res.render("index", {
      title: "Mini Message Board",
      messages: messages,
    });
  },
};

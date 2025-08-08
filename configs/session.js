import session from "express-session";
import MongoStore from "connect-mongo";

export const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    dbName: "mini_message_board_sessions",
    collectionName: "sessions",
    ttl: 60 * 60 * 24 * 30,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
});

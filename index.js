import url from "url";
import path from "path";
import express from "express";
import connectToMongoDB from "./configs/db.js";
import { indexRouter } from "./routes/index.js";
import { logger } from "./middlewares/logger.js";
import { formatDate } from "./utils/formatDate.js";
import { sessionConfig } from "./configs/session.js";
import { generateColor } from "./utils/generateColor.js";
import { newMessageRouter } from "./routes/newMessage.js";

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
connectToMongoDB();

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

app.use(logger);
app.use(sessionConfig);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.locals.formatDate = formatDate;
app.locals.generateColor = generateColor;

// routes
app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ quiet: true });
const uri = process.env.MONGODB_URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {
      ...clientOptions,
      dbName: "mini_message_board",
    });
    console.log("✅ MongoDB connected and ready.");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

export default connectToMongoDB;

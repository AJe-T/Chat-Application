import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messagesRoutes);

app.listen(5000, () => {
  connectToMongoDB();
  console.log("Server is running on port 5000");
});

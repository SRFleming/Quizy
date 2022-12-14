import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import quizRoutes from "./routes/quiz.js";
import userRoutes from "./routes/user.js";
import questionRoutes from "./routes/question.js";
import { passportConfig } from "./config/passport.js";
import { keys } from "./config/keys.js";
import { fileURLToPath } from "url";

const app = express();

passportConfig(passport);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRoutes);

app.use("/api", userRoutes);

app.use("/api", questionRoutes);

const { port, mongoDBUri } = keys.env;
const CONNECTION_URL = mongoDBUri;
const PORT = port;

if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.messsage));

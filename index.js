import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

import authRoutes from "./routes/authRoutes.js";
import privateRoutes from "./routes/privateRoutes.js";
import errorHandler from "./middleware/error.js";
import sharp from "sharp";

const app = express();

dotenv.config({ path: "./config/config.env" });
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res, next) => {
  let compressedImageFileSavePath = path.join(
    __dirname,
    "./",
    "public",
    "upload",
    new Date().getTime() + ".jpeg"
  );
  sharp(req.file.path)
    .resize(640, 480)
    .jpeg({
      quality: 80,
      chromaSubsampling: "4:4:4",
    })
    .toFile(compressedImageFileSavePath, (err, info) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json("updated");
      }
    });
});

app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

app.use("/auth", authRoutes);
app.use("/private", privateRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged error: ${err}`);
  server.close(() => process.exit(1));
});

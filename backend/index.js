import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookRouter from "./routes/book.route.js";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/books", bookRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});

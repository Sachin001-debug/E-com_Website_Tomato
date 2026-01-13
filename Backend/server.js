import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDb();

// API ENDPOINTS
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

app.get("/", (req, res) => res.send("API working !!!"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

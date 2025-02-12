import mongoose from "mongoose";
import express from "express";
import cors from "cors";
// import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// app.use("/api/users", userRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/CURD_Operation)")
.then(() => {
    console.log("MongoDB Connected");
})
.catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server started at port : ${PORT}`)
})
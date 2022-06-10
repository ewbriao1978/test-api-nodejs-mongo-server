import express from "express";
import movieRoutes from "./routes/routes.js";
import cors from "cors";
import database from "./config/database.js";
import mongoose from "mongoose";


const app = express();
mongoose.connect(database.uri,{ useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use("/movieinfo",movieRoutes);

app.listen(5000, () => console.log('Server listening on port 5000'));

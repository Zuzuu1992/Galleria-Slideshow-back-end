import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./databases/mongo.js";
import PaintingRouter from "./routes/paintingrouter.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connect();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", PaintingRouter);
app.use("/", ...swaggerMiddleware());

app.listen(3000);

import express from "express";
import { getAllPaintings } from "../controllers/project-controller.js";

const PaintingRouter = express.Router();

PaintingRouter.get("/paintings", getAllPaintings);

export default PaintingRouter;

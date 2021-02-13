import express from "express";
import {
  getMotives,
  createMotive,
  updateMotive,
  deleteMotive,
} from "../controllers/motives.js";

const router = express.Router();

// localhost:5000/motives
router.get("/", getMotives);
router.post("/", createMotive);
// localhost:5000/motives/:id
router.patch("/:id", updateMotive);
router.delete("/:id", deleteMotive);

export default router;

import express from "express";

const router = express.Router();

// localhost:5000/posts
router.get("/", getMotives);
router.post("/", createMotive);
// localhost:5000/posts/:id
router.patch("/:id", updateMotive);
router.delete("/:id", deleteMotive);

export default router;

import mongoose from "mongoose";
import Motive from "../models/motive.js";

export const getMotives = async (req, res) => {
  try {
    // finds all the motives in the db
    const motives = await Motive.find().sort("-createdAt");
    res.status(200).json(motives);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

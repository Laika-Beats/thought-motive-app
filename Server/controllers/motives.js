import mongoose from "mongoose";
import Motive from "../models/motive.js";

// FETCH
export const getMotives = async (req, res) => {
  try {
    // finds all the motives in the db
    const motives = await Motive.find().sort("-createdAt");
    res.status(200).json(motives);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE
export const createMotive = async (req, res) => {
  const motive = req.body;
  const newMotive = new Motive({
    ...motive,
    creator: req.userId,
    createdAt: new Date(),
  });
  try {
    await newMotive.save();
    res.status(201).json(newMotive);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// UPDATE
export const updateMotive = async (req, res) => {
  const { id: _id } = req.params;
  const motive = req.body;

  // if if is not valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No motives with that id.");

  // if is is valid
  const updatedMotive = await Motive.findByIdAndUpdate(
    _id,
    { ...motive, _id },
    {
      new: true,
    }
  );
  res.json(updatedMotive);
};

// DELETE
export const deleteMotive = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No motives with that id.");

  await Motive.findByIdAndRemove(id);

  res.json({ message: "Motive deleted succuessfully." });
};

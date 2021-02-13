import mongoose from "mongoose";

const motiveSchema = mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: [String],
    default: [],
  },
});

const Motive = mongoose.model("Motive", motiveSchema);

export default Motive;

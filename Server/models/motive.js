import mongoose from "mongoose";

const motiveSchema = mongoose.Schema(
  {
    message: String,
    creator: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
    likes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Motive = mongoose.model("Motive", motiveSchema);

export default Motive;

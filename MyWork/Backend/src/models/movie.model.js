import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: String,
    poster: String,
    description: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);

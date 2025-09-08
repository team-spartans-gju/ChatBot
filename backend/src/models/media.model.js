import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  fileUrl: { type: String, required: true }, // URL to the media file
  type: {
    type: String,
    enum: ["image", "video", "audio", "document"],
    required: true,
  }, // Type of media
  size: { type: Number, required: true }, // File size
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // User who uploaded the media
  timestamp: { type: Date, default: Date.now },
});

export const Media = mongoose.model("Media", mediaSchema);

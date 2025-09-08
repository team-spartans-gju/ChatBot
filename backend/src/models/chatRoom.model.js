import mongoose from "mongoose";

const chatroomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  createdAt: { type: Date, default: Date.now },
});

export const Chatroom = mongoose.model("Chatroom", chatroomSchema);

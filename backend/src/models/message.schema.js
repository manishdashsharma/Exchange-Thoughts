import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "userid can't be empty"]
    },
    message: {
        type: String,
        required: [true, "Message is required"]
    }
},{timestamps: true});

export default mongoose.model("Message",messageSchema);
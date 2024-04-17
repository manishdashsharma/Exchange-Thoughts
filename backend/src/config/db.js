import mongoose from "mongoose";
import config from "./index.js";
export const connectToDb = async () => {
    try {
        await mongoose.connect(config.MONGO_DB_URI);
        console.log('Connected to DB')
    } catch (error) {
        console.log('Failed to connect to DB: ', error);
    }
}


import mongoose from "mongoose";
import config from "./index.js";
export const connectToDb = async () => {
    console.log(config.MONGO_DB_URI);
    try {
        await mongoose.connect("mongodb+srv://mdashsharma95:b9ZrcdDl5RGZ6SLa@cluster0.uzelmme.mongodb.net/EXCHANGEYOURTHOUGHT?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Connected to DB')
    } catch (error) {
        console.log('Failed to connect to DB: ', error);
    }
}
b9ZrcdDl5RGZ6SLa


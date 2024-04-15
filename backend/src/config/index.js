import dotenv from 'dotenv';

dotenv.config()

const config = {
    PORT : process.env.PORT || 8000,
    IP: process.env.IP_ADDRESS || "192.168.0.100:9092",
    MONGO_DB_URI : process.env.MONGODB_URI || "mongodb+srv://manish:q1e2r3s4@cluster0.juwqqxw.mongodb.net/EXCHANGEYOURTHOUGHT?retryWrites=true&w=majority"
}

console.log(config.PORT, config.IP, config.MONGO_DB_URI);

export default config
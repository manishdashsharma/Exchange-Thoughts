import dotenv from 'dotenv';

dotenv.config()

const config = {
    PORT : process.env.PORT || 9000,
    IP: process.env.IP,
    MONGO_DB_URI : process.env.MONGO_DB_URI
}

export default config
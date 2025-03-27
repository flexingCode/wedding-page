import mongoose, { connection } from "mongoose";

const conn = {
    isConnected: false,
}

const connectDB = async () => {
    if (conn.isConnected) return;

    try {
        console.log("Connecting to MongoDB", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI as string);
        conn.isConnected = true;
    } catch (error) {
        console.log(error);
    }
}

connection.on("connected", () => {
    console.log("Connected to MongoDB");
})

connection.on("error", (error) => {
    console.log(error);
})

export const db = {
    connectDB,
}
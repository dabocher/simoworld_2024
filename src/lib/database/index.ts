import mongoose from "mongoose";

let catched = (global as any).mongoose || { conn: null, promise: null };

const MONGODB_URI = process.env.MONGODB_URI;
export const connectToDataBase = async () => {
  if (catched.conn) {
    return catched.conn;
  }

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  catched.promise =
    catched.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "SimoWorld",
      bufferCommands: false,
    });

  catched.conn = await catched.promise;

  return catched.conn;
};

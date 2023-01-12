import mongoose from "mongoose";


mongoose.set('strictQuery', false);

export const init = async (uri: string) => {

  try {
    const db = await mongoose.connect(uri);
    console.info("[SERVER] successfully connected to Mongoose 🦆");

    return db;
  } catch (e) {
    throw e
  }
}
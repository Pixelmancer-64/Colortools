import mongoose from "mongoose";
const url = process.env.DATABASE_URL;

export default async function openConnection() {
  await mongoose.connect(url);
}

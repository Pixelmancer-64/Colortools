import mongoose from "mongoose";
import Palette from "../../../models/palette";
const url = process.env.DATABASE_URL;

export default async function handler(req, res) {
  await mongoose.connect(url)

  const response = await Palette.find();

  res.status(200).json(response);
}
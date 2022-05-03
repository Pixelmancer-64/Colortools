import mongoose from "mongoose";
import Palette from "../../../models/palette";
const url = process.env.DATABASE_URL;

export default async function handler(req, res) {
  const { name } = req.query;
  await mongoose.connect(url)
  const palette = {
    name: name
  };


  const response = await Palette.findOne(palette);

  res.status(200).json(response);
}
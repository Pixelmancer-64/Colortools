import mongoose from "mongoose";
import Palette from "../../../models/palette";
const url = process.env.DATABASE_URL;

export default async function handler(req, res) {
  const {name, colors } = JSON.parse(req.body)
  const word = new Palette({
    name,
    colors: colors.map(e => {
      return {
        color: e,
        name: e
      }
    }),
  });

  await mongoose.connect(url);
  await word.save();

  res.status(200);
}

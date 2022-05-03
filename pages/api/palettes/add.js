import mongoose from "mongoose";
import Palette from "../../../models/palette";
const url = process.env.DATABASE_URL;

export default async function handler(req, res) {
  const word = new Palette({
    name: "testa",
    colors: [
      { color: "rgb(0, 0, 0)", name: "h" },
      { color: "rgb(255, 255, 255)", name: "hu" },
    ],
  });

  await mongoose.connect(url);
  await word.save();

  res.status(200).send("boa");
}

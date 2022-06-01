import Palette from "../../../../models/palette";
import openConnection from "../connect";

export async function find(req, res) {
  await openConnection();
  const response = await Palette.find();
  return JSON.parse(JSON.stringify(response));
}

export async function findOne(id) {
  await openConnection();

  const palette = {
    name: id,
  };

  const response = await Palette.findOne(palette);
  return JSON.parse(JSON.stringify(response));
}

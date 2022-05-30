import Palette from "../../../models/palette";
import openConnection from "../connect";

export default async function handler(req, res) {
  await openConnection();

  const { name } = req.query;
  const palette = {
    name: name,
  };

  const response = await Palette.findOne(palette);

  res.status(200).json(response);
}

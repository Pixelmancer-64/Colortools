import Palette from "../../../models/palette";
import openConnection from "../connect";

export default async function handler(req, res) {
  await openConnection();

  const response = await Palette.find();
  console.log(response)
  res.status(200).json(response);
}

import Palette from "../../../models/palette";
import openConnection from "../connect";

export default async function handler(req, res) {
  await openConnection();

  const { name, colors } = JSON.parse(req.body);
  const word = new Palette({
    name,
    colors: colors.map((e) => {
      return {
        color: e,
        name: e,
      };
    }),
  });

  await word.save();

  res.status(200);
}

import Palette from "../../../../models/palette";
import openConnection from "../connect";

export default async function add(obj) {
  await openConnection();

  const { name, colors } = obj;
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
  return
}

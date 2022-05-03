import { Schema, model, models } from "mongoose";

const wordSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
});

export default models.Palette || model("Palette", wordSchema);

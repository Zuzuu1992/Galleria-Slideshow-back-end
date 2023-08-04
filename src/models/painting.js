import { Schema, model } from "mongoose";

const paintingSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  year: {
    type: Schema.Types.Number,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  source: {
    type: Schema.Types.String,
    required: true,
  },
  artist: {
    image: {
      type: Schema.Types.String,
      required: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
  },
  images: {
    thumbnail: {
      type: Schema.Types.String,
      required: true,
    },
    hero: {
      small: {
        type: Schema.Types.String,
        required: true,
      },
      large: {
        type: Schema.Types.String,
        required: true,
      },
    },
    gallery: {
      type: Schema.Types.String,
      required: true,
    },
  },
});

const Painting = model("Painting", paintingSchema);

export default Painting;

import Painting from "../models/painting.js";

export const getAllPaintings = async (req, res) => {
  try {
    const paintings = await Painting.find();
    res.status(200).json(paintings);
  } catch (error) {
    console.error("Error fetching paintings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

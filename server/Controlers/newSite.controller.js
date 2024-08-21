import Sitios from "../Modelos/sitios.model.js";
import crypto from "crypto";

export const getSites = async (req, res) => {
  try {
    const allSites = await Sitios.find();
    res.json(allSites);
  } catch (error) {
    res.json(error);
  }
};

export const getSite = async (req, res) => {
  const Id = req.params.id;
  try {
    const Site = await Sitios.find({ id: Id });
    res.json(Site);
  } catch (error) {
    res.json(error);
  }
};
export const deleteSite = async (req, res) => {
  const Id = req.params.id;
  try {
    await Sitios.deleteOne({ id: Id });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.json(error);
  }
};

export const postSite = async (req, res) => {
  const { location, img } = req.body;
  const id = crypto.randomUUID();
  try {
    const Site = new Sitios({ location, img, id });
    await Site.save();
    res.status(200).json(Site);
  } catch (error) {
    res.json(error);
  }
};

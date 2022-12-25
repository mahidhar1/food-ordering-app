import Shop from "../../../models/Shop";
import dbConnect from "../../../util/mongo";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      let { city } = req.query;
      var regex = new RegExp(["^", city, "$"].join(""), "i");
      const shopsList = await Shop.find({ city: regex }).sort("-createdAt");
      res.status(200).json(shopsList);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

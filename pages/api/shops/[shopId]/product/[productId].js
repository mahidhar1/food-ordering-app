import Product from "../../../../../models/Product";
import dbConnect from "../../../../../util/mongo";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      let { shopId, productId } = req.query;
      const data = await Product.findOne({
        userId: shopId,
        _id: productId,
      }).sort("-createdAt");

      res.status(200).json({ data });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

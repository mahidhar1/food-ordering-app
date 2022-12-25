import Product from "../../../../models/Product";
import Shop from "../../../../models/Shop";
import dbConnect from "../../../../util/mongo";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect();

  if (method === "GET") {
    try {
      let { shopId } = req.query;
      const data = await Shop.findById(shopId);
      let { _id, name, email, phone, whatsapp, address, bio, photo } = data;
      let shop = { _id, name, email, phone, whatsapp, address, bio, photo };
      const data1 = await Product.find({ userId: shopId }).sort("-createdAt");
      let products = data1.map((obj) => {
        let {
          _id,
          name,
          sku,
          category,
          quantity,
          packSize,
          unit,
          price,
          discount,
          discountedPrice,
          image,
        } = obj;
        return {
          _id,
          name,
          sku,
          category,
          quantity,
          packSize,
          unit,
          price,
          discount,
          discountedPrice,
          image,
        };
      });
      res.status(200).json({ shop, products });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

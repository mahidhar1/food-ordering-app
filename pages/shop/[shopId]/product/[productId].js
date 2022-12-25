import styles from "../../../../styles/Product.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/cartSlice";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { shopId } = router?.query;

  const handleClickAddToCart = () => {
    dispatch(addProduct({ product, packs: quantity, shopId }));
  };

  return (
    <Layout shopId={shopId}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image
              src={product?.image}
              objectFit="contain"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{product?.name}</h1>
          <span className={styles.price}>₹{product?.price}</span>
          <div>{product.description}</div>
          <p className={styles.desc}>{product?.description}</p>
          <h3 className={styles.choose}>
            Pack Size:
            <span>{`${product?.packSize} ${product?.unit}`}</span>
          </h3>

          <div className={styles.add}>
            <input
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              defaultValue={1}
              className={styles.quantity}
            />
            <button className={styles.button} onClick={handleClickAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.BASE_URL}/api/shops/${context.params.shopId}/product/${context.params?.productId}`,
  );
  return {
    props: {
      product: res?.data?.data,
    },
  };
}

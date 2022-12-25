import Image from "next/image";
import Link from "next/link";
import styles from "../styles/FoodCard.module.css";

const fallbackImageUrl =
  "https://cdn.shopify.com/s/files/1/0483/7484/1507/products/KodoMillet2_1080x.jpg?v=1667813393";

const FoodCard = ({ shopId, data }) => {
  return (
    <div className={styles.container}>
      <Link href={`/shop/${shopId}/product/${data?._id}`}>
        {typeof data?.image === "string" &&
        data?.image.startsWith("https://") ? (
          <Image src={data?.image} alt="" width="150" height="150" />
        ) : (
          <Image src={fallbackImageUrl} alt="" width="150" height="150" />
        )}

        <h1 className={styles.title}>{data?.name}</h1>
        <span className={styles.price}>{`₹${data?.price}`}</span>
      </Link>
    </div>
  );
};

export default FoodCard;

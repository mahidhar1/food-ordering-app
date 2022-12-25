import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";

const FoodList = ({ productList, shopId }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MILLET BASED PRODUCTS FROM US</h1>
      <p className={styles.desc}>
        {productList?.length === 0 ? "Coming Soon..." : ""}
      </p>

      <div className={styles.wrapper}>
        {productList?.map((obj) => (
          <FoodCard key={obj._id} data={obj} shopId={shopId} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;

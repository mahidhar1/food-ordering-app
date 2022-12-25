import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { reset } from "../redux/cartSlice";
import Router from "next/router";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <Layout shopId={cart.shopId}>
      <div className={styles.container}>
        <div className={styles.left}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Name</th>
                <th>Pack Size</th>
                <th>Packs</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map(({ product, packs }) => (
                <tr className={styles.tr} key={product._id}>
                  <td>
                    <span className={styles.name}>{product.name}</span>
                  </td>
                  <td>
                    <span className={styles.extras}>
                      {`${product.packSize} ${product.unit}`}
                    </span>
                  </td>
                  <td>
                    <span className={styles.quantity}>{packs}</span>
                  </td>
                  <td>
                    <span className={styles.price}>{product.price}</span>
                  </td>

                  <td>
                    <span className={styles.total}>
                      {product.price * packs}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>
              {cart.total}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>
              {cart.total}
            </div>
            <button
              className={styles.button}
              onClick={() => {
                dispatch(reset());
                Router.push("/");
              }}
            >
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

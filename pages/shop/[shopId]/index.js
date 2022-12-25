import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../../../components/Featured";
import FoodList from "../../../components/FoodList";
import Footer from "../../../components/Footer";
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar";
import styles from "../../../styles/Home.module.css";

export default function Shop({ shopDetails, productList }) {
  return (
    <div>
      <Head>
        <title>Millet World</title>
        <meta name="description" content="Millets in india" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout shopId={shopDetails?._id}>
        <FoodList productList={productList} shopId={shopDetails?._id} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.BASE_URL}/api/shops/${context.params?.shopId}`,
  );
  return {
    props: {
      shopDetails: res?.data?.shop,
      productList: res?.data?.products,
    },
  };
}

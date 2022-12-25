import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../components/Featured";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import ShopCard from "../components/ShopCard";
import styles from "../styles/Home.module.css";
import searchGif from "./../static/searchGif.gif";

const cities = [
  "Ahmedabad",
  "Bangalore",
  "Chandigarh",
  "Hyderabad",
  "Pune",
  "Mumbai",
];
export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [shops, setShops] = useState(null);

  const handleSearch = async (value) => {
    setIsSearching(true);
    try {
      let res = await axios.get(`/api/shops`, {
        params: { city: value },
      });
      setShops(res?.data);
    } catch (error) {
      console.log(error);
    }
    setIsSearching(false);
  };
  return (
    <div>
      <Head>
        <title>Millet World</title>
        <meta name="description" content="Millets in india" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBox onSearch={handleSearch} />
      <div className={styles["centered-container"]}>
        <div>Search for millet based products. Currently available in </div>
        <div className={styles["cities-row"]}>
          {cities.map((city) => (
            <div className={styles["city-label"]} key={city}>
              {city}
            </div>
          ))}
        </div>
      </div>

      {isSearching ? (
        <div className={styles["searching-gif"]}>
          <Image src={searchGif} width={50} height={50} alt="Searching..." />
        </div>
      ) : (
        <div className={styles["shop-list"]}>
          {shops?.length === 0 ? (
            <div>No shops found</div>
          ) : (
            shops?.map((obj) => <ShopCard key={obj._id} shopData={obj} />)
          )}
        </div>
      )}
    </div>
  );
}

// export async function getServerSideProps({ req }) {
//   const res = await axios.get(`${process.env.BASE_URL}/api/shops`);
//   return {
//     props: {
//       shopsList: [],
//     },
//   };
// }

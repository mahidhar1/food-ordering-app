import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const ShopCard = ({ shopData }) => {
  let {
    _id: id,
    name,
    email,
    photo,
    phone,
    whatsapp,
    address,
    city,
    bio,
  } = shopData;
  console.log(shopData);
  return (
    <Link href={`/shop/${id}`}>
      <div className={styles["shop-card"]}>
        <div>
          <h1>{name}</h1>
          <h2>{address}</h2>
          <h4>{phone}</h4>
          <h4>{whatsapp}</h4>
        </div>
        <div>
          {photo.startsWith("https://") ? (
            <Image
              src={photo}
              alt={`photo of ${name}`}
              width={200}
              height={200}
            />
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;

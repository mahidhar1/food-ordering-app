import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = ({ shopDetails }) => {
  let { address, bio, photo, name } = shopDetails;
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {photo?.startsWith("https://") ? (
          <Image
            src={photo}
            alt={`photo of ${name}`}
            width={500}
            height={500}
          />
        ) : (
          <Image
            src="/img/fresh_millet_crop.jpg"
            objectFit="cover"
            layout="fill"
            alt=""
          />
        )}
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>{name}</h1>
          <h2 className={styles.motto}>{bio}</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR OUTLETS</h1>
          <p className={styles.text}>{address}</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

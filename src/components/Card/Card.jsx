import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023. - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero ea! Expedita veniam delectus ad libero
          laborum eius excepturi numquam, repudiandae commodi nostrum! Ducimus ratione fugit ullam provident quaerat ad?
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

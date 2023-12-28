import styles from "./Comments.module.css";
import Link from "next/link";
import Image from "next/image";

export const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Add a comments..." className={styles.input} />
          <button className={styles.button}>Add</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comments </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" className={styles.image} width={50} height={50} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024.</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sint praesentium voluptatibus neque. Quia
            distinctio reprehenderit similique consequatur tempora consequuntur sapiente temporibus eum laudantium id,
            tenetur earum molestiae praesentium animi!
          </p>
        </div>
      </div>
    </div>
  );
};

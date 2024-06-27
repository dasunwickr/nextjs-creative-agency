import Image from "next/image";
import styles from "./home.module.css";
const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quia
          et fuga praesentium, ullam nisi placeat voluptas ex omnis, eos
          corporis expedita repudiandae ipsum, accusantium harum doloremque
          quibusdam reiciendis natus.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brands}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Homepage;

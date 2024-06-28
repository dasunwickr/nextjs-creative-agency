import Image from "next/image";
import styles from "./singlepost.module.css";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.jpg" alt="post" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>Title</div>
        <div className={styles.detail}>
          <Image
            src="/post.jpg"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          saepe quaerat? Earum quod, quae quo voluptatem sed illo alias ipsam
          sunt excepturi officia perspiciatis quia? Nemo saepe sequi cum
          voluptate.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

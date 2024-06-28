import Link from "next/link";
import styles from "./postcard.module.css";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.jpg" alt="post" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, veniam!
          Et suscipit molestiae sit tempora, veritatis explicabo cumque placeat
          similique totam debitis consequuntur harum facere saepe dignissimos,
          eaque, accusamus maiores!
        </p>
        <Link href={`/blog/post`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

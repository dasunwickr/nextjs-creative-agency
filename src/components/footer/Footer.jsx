import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>dasun.wickr</div>
      <div className={styles.text}>
        &copy; {new Date().getFullYear()} Creative Thoughts Agency. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;

import styles from "../page.module.css";

export default function TopHeader() {
  return (
    <div className={styles.topheader}>
      <p>Stream React Conf on May 15-16.</p>{" "}
      <p className={styles.learnMore}>Learn More.</p>
    </div>
  );
}

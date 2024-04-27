import AppImageComponent from "@/app/components/AppImageComponent";
import styles from "../page.module.css";
export default function Header() {
  const list = ["Learn", "References", "Community", "Blog"];
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerFirst}>
        <AppImageComponent
          name="images/react-js-icon.svg"
          width={35}
          height={34}
        />
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            className={styles.seachInput}
            placeholder={"search"}
          />
        </div>
      </div>
      <div className={styles.headerSecond}>
        {list.map((data) => (
          <p>{data}</p>
        ))}
      </div>
    </div>
  );
}

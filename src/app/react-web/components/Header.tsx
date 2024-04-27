import AppImageComponent from "@/app/components/AppImageComponent";
import styles from "../page.module.css";
export default function Header() {
  return (
    <div className={styles.headerMain}>
      <div>
        <AppImageComponent
          name="images/react-js-icon.svg"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

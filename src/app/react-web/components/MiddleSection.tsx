import AppImageComponent from "@/app/components/AppImageComponent";
import styles from "../page.module.css";
import SpacerHeight from "@/app/components/SpacerHeight";

export default function MiddleSection() {
  return (
    <div className={styles.middleComponent}>
      <div className={styles.middleContent}>
        <AppImageComponent
          name="images/react-js-icon.svg"
          width={90}
          height={90}
        />
        <SpacerHeight height={"10px"} />
        <h1>{"React"}</h1>
        <SpacerHeight height={"10px"} />
        <h2>{"The library for web and native user interfaces"}</h2>
        <SpacerHeight height={"10px"} />
        <div>
          <div className={styles.learnReactButton}>
            <a href="" style={{ color: "white", textDecoration: "none" }}>
              {"Learn React"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

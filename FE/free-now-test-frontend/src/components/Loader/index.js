import { ReactComponent as LoadingIcon } from "../../assets/icons/Icon-Loading.svg";

import styles from "./index.module.css";

export default function Loader({text}) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loadingCard}>
        <LoadingIcon className={styles.icon} />
      </div>
      {text && (
        <div className={styles.loadingText}>{text}</div>
      )}
    </div>
  );
}
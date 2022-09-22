import styles from "./index.module.css";
import clsx from "clsx";

export default function Avatar({ name, image, className }) {
  if (!name) return null;

  let initials = name?.match(/\b(\w)/g);
  initials = initials.slice(0, 2).join("");
  return (
    <button className={clsx(styles.avatar, className)}>
      {image ? <img src={image} alt={name || ""} /> : initials}
    </button>
  );
}
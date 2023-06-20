import styles from "./BaseButton.module.scss";

function BaseButton({ title, onClick }) {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        {title}
      </button>
    </>
  );
}

export default BaseButton;

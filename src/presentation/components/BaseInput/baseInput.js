import styles from './baseInput.module.scss';

function BaseInput({ title, value, onChange, placeholder, name }) {
  return (
    <div className={styles.container}>
      <label>{title}</label>
      <input
        name={name}
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default BaseInput;

import styles from './content.module.scss'

function Content({ children }) {
  return <div className={styles.container}> {children}</div>;
}

export default Content;

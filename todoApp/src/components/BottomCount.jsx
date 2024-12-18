import styles from "./css/bottomCount.module.css";

export function BottomCount({ totalCount, completedCount }) {
  return (
    <div className={styles.bottomDiv}>
      <span className={styles.bottomSpanTotal}>Total Count : {totalCount}</span>
      <span>Completed Count : {completedCount}</span>
    </div>
  );
}

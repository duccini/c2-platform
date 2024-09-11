import styles from "./styles.module.css";

const TableHeader = ({ columns }: { columns: string[] }) => (
  <thead className={styles.thead}>
    <tr className={styles.tableHeader}>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;

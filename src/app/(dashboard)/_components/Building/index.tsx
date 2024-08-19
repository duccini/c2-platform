import Link from "next/link";

import styles from "./styles.module.css";

const Building = () => {
  return (
    <div className={styles.building}>
      <h1>Em construção</h1>
      <Link href="/users">Voltar</Link>
    </div>
  );
};

export default Building;

import { TbAdjustmentsHorizontal } from "react-icons/tb";

import styles from "./styles.module.css";

const FilterBtn = ({ text }: { text: string }) => {
  return (
    <button className={styles.filterBtn}>
      <TbAdjustmentsHorizontal size={26} />
      <span>Filtrar por {text}</span>
    </button>
  );
};

export default FilterBtn;

import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import styles from "./styles.module.css";

interface FilterBtnProps {
  text: string;
  options: string[];
  selectedFilter: string;
  onFilter: (column: string, value: string) => void;
  onClearFilter: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterBtn = ({
  text,
  options,
  selectedFilter,
  onFilter,
  onClearFilter,
  isOpen,
  onToggle,
}: FilterBtnProps) => {
  const handleOptionClick = (value: string) => {
    onFilter(text.toLowerCase(), value);
    onToggle();
  };

  const handleClearFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClearFilter();
  };

  return (
    <div className={styles.filterContainer}>
      <button className={styles.filterBtn} onClick={onToggle}>
        <TbAdjustmentsHorizontal size={26} />
        <span>{selectedFilter || `Filtrar por ${text}`}</span>
        {selectedFilter && (
          <FaTimes
            className={styles.clearIcon}
            size={16}
            onClick={handleClearFilterClick}
          />
        )}
      </button>
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
        {options.map((option) => (
          <div
            key={option}
            className={styles.option}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBtn;

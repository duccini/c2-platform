import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./styles.module.css";

const Pagination = ({
  currentPage,
  totalPages,
  maxVisiblePages,
  paginate,
}: any) => {
  const createPageButtons = () => {
    let buttons = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = 1; i <= totalPages; i++) {
      if (i >= startPage && i <= endPage) {
        buttons.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            style={{
              backgroundColor: currentPage === i ? "#252020" : undefined,
            }}
          >
            {i}
          </button>
        );
      } else if (i === startPage - 1 || i === endPage + 1) {
        buttons.push(<span key={i}>...</span>);
      }
    }

    return buttons;
  };

  return (
    <section className={styles.pagination}>
      <button onClick={() => paginate(1)} disabled={currentPage === 1}>
        <RxDoubleArrowLeft />
      </button>
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      {createPageButtons()}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
      <button
        onClick={() => paginate(totalPages)}
        disabled={currentPage === totalPages}
      >
        <RxDoubleArrowRight />
      </button>
    </section>
  );
};

export default Pagination;

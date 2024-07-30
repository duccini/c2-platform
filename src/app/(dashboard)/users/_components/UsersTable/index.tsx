"use client";

import { useUsers } from "../../_hooks/useUsers";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import FilterBtn from "./FilterBtn";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "./Pagination";

import styles from "./styles.module.css";

const UsersTable = () => {
  const {
    usersPerPage,
    currentPage,
    filteredData,
    paginate,
    filteredUsers,
    editUserId,
    editFormData,
    setSearch,
    handleEditFormChange,
    handleEditFormSubmit,
    handleEditClick,
    handleCancelClick,
    handleDeleteClick,
  } = useUsers();

  const columns: string[] = [
    "Nome",
    "Equipe",
    "Trilha",
    "Permissão",
    "Função",
    "Ações",
  ];
  const totalPages = Math.ceil(filteredData.length / usersPerPage);
  const maxVisiblePages = 3;

  return (
    <>
      <section className={styles.filters}>
        <div className={styles.filterSearch}>
          <HiOutlineMagnifyingGlass size={20} />
          <input
            className={styles.filterInput}
            type="text"
            placeholder="Buscar por nome..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div className={styles.filterBtns}>
          <FilterBtn text="trilha" />
          <FilterBtn text="equipe" />
          <FilterBtn text="função" />
        </div>
      </section>

      <form onSubmit={handleEditFormSubmit}>
        <table className={styles.table}>
          <TableHeader columns={columns} />
          <TableBody
            users={filteredUsers}
            editUserId={editUserId}
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        </table>
      </form>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        maxVisiblePages={maxVisiblePages}
        paginate={paginate}
      />
    </>
  );
};

export default UsersTable;

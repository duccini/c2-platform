"use client";

import { Fragment, useRef } from "react";
import { useUsers } from "../../_hooks/useUsers";

import FilterBtn from "./FilterBtn";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import styles from "./styles.module.css";

const UsersTable = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    filteredUser,
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
          <thead className={styles.thead}>
            <tr className={styles.tableHeader}>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {filteredUser.map((user) => (
              <Fragment key={user.id}>
                {editUserId === user.id ? (
                  <EditableRow
                    ref={inputRef}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    user={user}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default UsersTable;

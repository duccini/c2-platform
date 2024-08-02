"use client";

import { useEffect, useRef } from "react";
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
    uniqueTeams,
    uniqueTracks,
    uniqueRoles,
    filters,
    openFilter,
    handleToggleFilter,
    handleFilter,
    handleClearFilter,
  } = useUsers();

  const filterContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterContainerRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        handleToggleFilter("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleToggleFilter]);

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
          <div
            ref={(el) => {
              filterContainerRefs.current[0] = el;
            }}
          >
            <FilterBtn
              text="Equipe"
              options={uniqueTeams}
              selectedFilter={filters["equipe"] || ""}
              onFilter={handleFilter}
              onClearFilter={() => handleClearFilter("equipe")}
              isOpen={openFilter === "equipe"}
              onToggle={() => handleToggleFilter("equipe")}
            />
          </div>
          <div
            ref={(el) => {
              filterContainerRefs.current[1] = el;
            }}
          >
            <FilterBtn
              text="Trilha"
              options={uniqueTracks}
              selectedFilter={filters["trilha"] || ""}
              onFilter={handleFilter}
              onClearFilter={() => handleClearFilter("trilha")}
              isOpen={openFilter === "trilha"}
              onToggle={() => handleToggleFilter("trilha")}
            />
          </div>
          <div
            ref={(el) => {
              filterContainerRefs.current[2] = el;
            }}
          >
            <FilterBtn
              text="Função"
              options={uniqueRoles}
              selectedFilter={filters["função"] || ""}
              onFilter={handleFilter}
              onClearFilter={() => handleClearFilter("função")}
              isOpen={openFilter === "função"}
              onToggle={() => handleToggleFilter("função")}
            />
          </div>
        </div>
      </section>

      <form onSubmit={handleEditFormSubmit}>
        <table className={styles.table}>
          <TableHeader columns={columns} />
          {filteredUsers.length > 0 ? (
            <TableBody
              users={filteredUsers}
              editUserId={editUserId}
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              handleCancelClick={handleCancelClick}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          ) : (
            <tbody>
              <tr>
                <td colSpan={columns.length} className={styles.noData}>
                  Nenhum usuário encontrado...
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </form>

      {filteredUsers.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          maxVisiblePages={maxVisiblePages}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default UsersTable;

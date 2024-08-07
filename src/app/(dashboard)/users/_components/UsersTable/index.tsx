"use client";

import { MAX_VISIBLE_PAGES } from "../../_utils/constants";
import useUsers from "../../_utils/_hooks/useUsers";
import FilterSection from "./FilterSection";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import NoDataMessage from "./NoDataMessage";
import Pagination from "./Pagination";

import styles from "./styles.module.css";

const UsersTable = () => {
  const {
    USERS_PER_PAGE,
    currentPage,
    filteredData,
    paginate,
    filteredUsers,
    editUserId,
    editFormData,
    search,
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

  const columns: string[] = [
    "Nome",
    "Equipe",
    "Trilha",
    "Permissão",
    "Função",
    "Ações",
  ];
  const totalPages = Math.ceil(filteredData.length / USERS_PER_PAGE);

  return (
    <>
      <FilterSection
        search={search}
        setSearch={setSearch}
        filters={filters}
        uniqueTeams={uniqueTeams}
        uniqueTracks={uniqueTracks}
        uniqueRoles={uniqueRoles}
        openFilter={openFilter}
        handleToggleFilter={handleToggleFilter}
        handleFilter={handleFilter}
        handleClearFilter={handleClearFilter}
      />

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
            <NoDataMessage colSpan={columns.length} />
          )}
        </table>
      </form>

      {filteredUsers.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          maxVisiblePages={MAX_VISIBLE_PAGES}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default UsersTable;

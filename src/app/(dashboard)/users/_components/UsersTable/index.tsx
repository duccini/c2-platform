"use client";

import { ChangeEvent, FormEvent, Fragment, MouseEvent, useState } from "react";
import data from "../../dataMock.json";
import { UserProps } from "../../_utils/user.type";

import FilterBtn from "./FilterBtn";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import styles from "./styles.module.css";

export type EditFormData = {
  name: string;
  team: string;
  track: string;
  permission: string;
  role: string;
};

const UsersTable = () => {
  const [user, setUser] = useState<UserProps[]>(data);
  const [search, setSearch] = useState("");
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<EditFormData>({
    name: "",
    team: "",
    track: "",
    permission: "",
    role: "",
  });

  const columns: string[] = [
    "Nome",
    "Equipe",
    "Trilha",
    "Permissão",
    "Função",
    "Ações",
  ];

  const filteredUser = user.filter((user) => {
    return search.toLowerCase() === ""
      ? user
      : user.name.toLowerCase().includes(search);
  });

  const handleEditFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name") as keyof EditFormData;
    const fieldValue: string = e.target.value;

    const newFormData: EditFormData = {
      ...editFormData,
      [fieldName]: fieldValue,
    };

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (editUserId === null) {
      return;
    }

    const editedUser = {
      id: editUserId,
      name: editFormData.name,
      team: editFormData.team,
      track: editFormData.track,
      permission: editFormData.permission,
      role: editFormData.role,
    };

    const newUser = [...user];

    const index = user.findIndex((user) => user.id === editUserId);

    if (index !== -1) {
      newUser[index] = editedUser;
      setUser(newUser);
    }

    setEditUserId(null);
  };

  const handleEditClick = (
    e: MouseEvent<HTMLButtonElement>,
    user: UserProps
  ) => {
    e.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      team: user.team,
      track: user.track,
      permission: user.permission,
      role: user.role,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  const handleDeleteClick = (userId: number) => {
    const newUser: UserProps[] = [...user];

    const index = user.findIndex((user) => user.id === userId);

    if (index !== -1) {
      newUser.splice(index, 1);
      setUser(newUser);
    }
  };

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
              {columns.map((column) => {
                return <th key={column}>{column}</th>;
              })}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {filteredUser.map((user) => (
              <Fragment key={user.id}>
                {editUserId === user.id ? (
                  <EditableRow
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

import { MouseEvent } from "react";
import { UserProps } from "@/app/(dashboard)/users/_utils/_types/user.type";
import { CiEdit } from "react-icons/ci";

import styles from "./styles.module.css";

interface ReadOnlyRowProps {
  user: UserProps;
  handleEditClick: (e: MouseEvent<HTMLButtonElement>, user: UserProps) => void;
}

const ReadOnlyRow = ({ user, handleEditClick }: ReadOnlyRowProps) => {
  const isAdmin = user.permission === "Administrador";

  return (
    <tr className={styles.tableBody}>
      <td>{user.name}</td>
      <td>{user.team}</td>
      <td>{user.track}</td>
      <td className={`${isAdmin ? styles.adminRow : ""}`}>{user.permission}</td>
      <td>{user.role}</td>
      <td className={styles.actionBtns}>
        <button
          className={styles.actionBtn}
          onClick={(e) => {
            handleEditClick(e, user);
          }}
        >
          <CiEdit size={28} />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

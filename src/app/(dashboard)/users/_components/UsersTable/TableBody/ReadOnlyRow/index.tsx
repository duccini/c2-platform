import { MouseEvent } from "react";
import { UserProps } from "@/app/(dashboard)/users/_utils/_types/user.type";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

import styles from "./styles.module.css";

interface ReadOnlyRowProps {
  user: UserProps;
  handleEditClick: (e: MouseEvent<HTMLButtonElement>, user: UserProps) => void;
  handleDeleteClick: (userId: number) => void;
}

const ReadOnlyRow = ({
  user,
  handleEditClick,
  handleDeleteClick,
}: ReadOnlyRowProps) => {
  return (
    <tr className={styles.tableBody}>
      <td>{user.name}</td>
      <td>{user.team}</td>
      <td>{user.track}</td>
      <td>{user.permission}</td>
      <td>{user.role}</td>
      <td className={styles.actionBtns}>
        <button
          className={styles.actionBtn}
          onClick={(e) => handleEditClick(e, user)}
        >
          <BsThreeDotsVertical size={20} />
        </button>
        <button
          className={styles.actionBtn}
          onClick={() => handleDeleteClick(user.id)}
        >
          <FaTrash size={20} />
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

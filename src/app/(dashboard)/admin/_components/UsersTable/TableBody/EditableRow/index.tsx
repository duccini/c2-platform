import { ChangeEvent } from "react";
import { UserProps } from "@/app/(dashboard)/admin/_utils/_types/user.type";
import { EditFormData } from "@/app/(dashboard)/admin/_utils/_types/form.type";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";

import styles from "./styles.module.css";

interface EditableRowProps {
  user: UserProps;
  editFormData: EditFormData;
  handleEditFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleCancelClick: () => void;
  handleDeleteClick: (userId: number) => void;
  teamOptions: string[];
  trackOptions: string[];
  permissionOptions: string[];
  roleOptions: string[];
}

const EditableRow: React.FC<EditableRowProps> = ({
  user,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleDeleteClick,
  teamOptions,
  trackOptions,
  permissionOptions,
  roleOptions,
}) => {
  const isAdmin = editFormData.permission === "Administrador";

  return (
    <tr className={styles.tableBody}>
      <td>
        <input
          type="text"
          placeholder="Digite o nome completo..."
          className={styles.editInput}
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
          required
        />
      </td>
      <td>
        <select
          className={styles.editSelect}
          name="team"
          value={editFormData.team}
          onChange={handleEditFormChange}
          required
        >
          {teamOptions.map((option) => (
            <option key={option} value={option} className={styles.option}>
              {option}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select
          className={styles.editSelect}
          name="track"
          value={editFormData.track}
          onChange={handleEditFormChange}
          required
        >
          {trackOptions.map((option) => (
            <option key={option} value={option} className={styles.option}>
              {option}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select
          className={`${styles.editSelect} ${isAdmin ? styles.adminRow : ""}`}
          name="permission"
          value={editFormData.permission}
          onChange={handleEditFormChange}
          required
        >
          {permissionOptions.map((option) => (
            <option
              key={option}
              value={option}
              className={`${styles.option} ${
                option === "Administrador" ? styles.adminRow : ""
              }`}
            >
              {option}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select
          className={styles.editSelect}
          name="role"
          value={editFormData.role}
          onChange={handleEditFormChange}
          required
        >
          {roleOptions.map((option) => (
            <option key={option} value={option} className={styles.option}>
              {option}
            </option>
          ))}
        </select>
      </td>
      <td className={styles.actionBtns}>
        <button className={styles.actionBtn} type="submit">
          <FaCheck size={28} />
        </button>
        <button className={styles.actionBtn} onClick={handleCancelClick}>
          <FaXmark size={28} />
        </button>
        <button
          className={`${styles.actionBtn} ${styles.deleteBtn}`}
          onClick={() => handleDeleteClick(user.id)}
        >
          <FiTrash2 size={28} />
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;

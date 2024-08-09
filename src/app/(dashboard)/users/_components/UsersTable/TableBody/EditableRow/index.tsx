import { ChangeEvent, forwardRef } from "react";
import { EditFormData } from "@/app/(dashboard)/users/_utils/_types/form.type";
import { FaCheck, FaXmark } from "react-icons/fa6";

import styles from "./styles.module.css";

interface EditableRowProps {
  editFormData: EditFormData;
  handleEditFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleCancelClick: () => void;
  teamOptions: string[];
  trackOptions: string[];
  permissionOptions: string[];
  roleOptions: string[];
}

const EditableRow = forwardRef<HTMLInputElement, EditableRowProps>(
  ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    teamOptions,
    trackOptions,
    permissionOptions,
    roleOptions,
  }) => {
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
            className={styles.editSelect}
            name="permission"
            value={editFormData.permission}
            onChange={handleEditFormChange}
            required
          >
            {permissionOptions.map((option) => (
              <option key={option} value={option} className={styles.option}>
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
            <FaCheck size={20} />
          </button>
          <button className={styles.actionBtn} onClick={handleCancelClick}>
            <FaXmark size={20} />
          </button>
        </td>
      </tr>
    );
  }
);

EditableRow.displayName = "EditableRow";

export default EditableRow;

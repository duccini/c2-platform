import { ChangeEvent, forwardRef, useEffect, useRef } from "react";
import { EditFormData } from "@/app/(dashboard)/users/_utils/form.type";
import { FaCheck, FaXmark } from "react-icons/fa6";

import styles from "./styles.module.css";

interface EditableRowProps {
  editFormData: EditFormData;
  handleEditFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCancelClick: () => void;
}

const EditableRow = forwardRef<HTMLInputElement, EditableRowProps>(
  ({ editFormData, handleEditFormChange, handleCancelClick }, ref) => {
    const inputRef = ref || useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef && "current" in inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return (
      <tr className={styles.tableBody}>
        <td>
          <input
            ref={inputRef}
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
          <input
            type="text"
            placeholder="Digite a equipe..."
            className={styles.editInput}
            name="team"
            value={editFormData.team}
            onChange={handleEditFormChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Digite a trilha..."
            className={styles.editInput}
            name="track"
            value={editFormData.track}
            onChange={handleEditFormChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Digite a permissão..."
            className={styles.editInput}
            name="permission"
            value={editFormData.permission}
            onChange={handleEditFormChange}
            required
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Digite a função..."
            className={styles.editInput}
            name="role"
            value={editFormData.role}
            onChange={handleEditFormChange}
            required
          />
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

export default EditableRow;
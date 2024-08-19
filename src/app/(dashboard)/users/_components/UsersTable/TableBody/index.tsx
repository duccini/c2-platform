import { Fragment, useState } from "react";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import ConfirmationModal from "./ConfirmationModal";

import styles from "./styles.module.css";

const TableBody = ({
  users,
  editUserId,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditClick,
  handleDeleteClick,
  uniqueTeams,
  uniqueTracks,
  uniquePermissions,
  uniqueRoles,
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  const handleDeleteButtonClick = (userId: number): void => {
    setUserToDelete(userId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete !== null) {
      handleDeleteClick(userToDelete);
    }
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setUserToDelete(null);
  };

  return (
    <>
      <tbody className={styles.tbody}>
        {users.map((user: any) => (
          <Fragment key={user.id}>
            {editUserId === user.id ? (
              <EditableRow
                user={user}
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
                handleDeleteClick={handleDeleteButtonClick}
                teamOptions={uniqueTeams}
                trackOptions={uniqueTracks}
                permissionOptions={uniquePermissions}
                roleOptions={uniqueRoles}
              />
            ) : (
              <ReadOnlyRow user={user} handleEditClick={handleEditClick} />
            )}
          </Fragment>
        ))}
      </tbody>
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default TableBody;

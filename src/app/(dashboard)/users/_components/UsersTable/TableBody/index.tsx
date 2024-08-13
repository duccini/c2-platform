import { Fragment } from "react";

import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

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
}: any) => (
  <tbody className={styles.tbody}>
    {users.map((user: any) => (
      <Fragment key={user.id}>
        {editUserId === user.id ? (
          <EditableRow
            user={user}
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}
            handleDeleteClick={handleDeleteClick}
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
);

export default TableBody;

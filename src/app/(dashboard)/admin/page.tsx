import DashboardHeader from "../_components/DashboardHeader";
import UsersTable from "./_components/UsersTable";

import styles from "./page.module.css";

export default function Users() {
  return (
    <main className={styles.users}>
      <DashboardHeader text="Usuários" />
      <UsersTable />
    </main>
  );
}

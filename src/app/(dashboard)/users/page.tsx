import UsersTable from "./_components/UsersTable";
import styles from "./page.module.css";

export default function Users() {
  return (
    <main className={styles.users}>
      <h1 className={styles.title}>
        <span> Painel Administrativo / </span>Usuários
      </h1>

      <UsersTable />
    </main>
  );
}

import DashboardHeader from "../_components/DashboardHeader";
import Form from "./_components/Form";

import styles from "./page.module.css";

export default function Projects() {
  return (
    <main className={styles.projects}>
      <DashboardHeader text="Projetos" />

      <h1 className={styles.title}>Gerenciar projetos</h1>

      <Form />
    </main>
  );
}

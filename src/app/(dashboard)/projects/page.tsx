import DashboardHeader from "../_components/DashboardHeader";

import styles from "./page.module.css";

export default function Projects() {
  return (
    <main className={styles.projects}>
      <DashboardHeader text="Projetos" />
    </main>
  );
}

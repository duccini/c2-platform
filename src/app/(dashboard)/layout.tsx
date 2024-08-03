import type { Metadata } from "next";
import "../globals.css";
import styles from "./layout.module.css";

import DashboardSidebar from "./_components/DashboardSidebar";

export const metadata: Metadata = {
  title: "Código Certo",
  description:
    "Somos uma iniciativa dedicada a capacitar novos talentos na área de tecnologia através de projetos práticos e mentoria especializada. Nossa missão é fomentar a inovação e o desenvolvimento digital, criando oportunidades de aprendizado e crescimento para todos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <DashboardSidebar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

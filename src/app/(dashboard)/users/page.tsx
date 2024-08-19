import Image from "next/image";
import UsersTable from "./_components/UsersTable";
import profileImg from "public/images/Baylee.svg";
import { MdKeyboardArrowDown } from "react-icons/md";

import styles from "./page.module.css";

export default function Users() {
  return (
    <main className={styles.users}>
      <header className={styles.dashboardHeader}>
        <h1 className={styles.title}>
          <span> Painel Administrativo / </span>Usuários
        </h1>
        <div className={styles.profile}>
          <Image
            src={profileImg}
            alt="Imagem do Perfil"
            width={24}
            height={24}
            quality={100}
            priority
          />
          <p>Baylee Horne</p>
          <MdKeyboardArrowDown size={18} />
        </div>
      </header>

      <UsersTable />
    </main>
  );
}

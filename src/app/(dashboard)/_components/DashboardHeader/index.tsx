import Image from "next/image";
import profileImg from "public/images/Baylee.svg";
import { MdKeyboardArrowDown } from "react-icons/md";

import styles from "./styles.module.css";

const DashboardHeader = ({ text }: { text: string }) => {
  return (
    <header className={styles.dashboardHeader}>
      <h1 className={styles.title}>
        <span> Painel Administrativo / </span>
        {text}
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
  );
};

export default DashboardHeader;

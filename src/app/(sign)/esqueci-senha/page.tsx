import Link from "next/link";
import styles from "./page.module.css";
import { FaArrowLeft, FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";

import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";

export default function EsqueciSenha() {
  return (
    <div className={styles.containerSenhaUser}>
      <BackgroundStyle />

      <div className={styles.containerForm}>
        <div className={styles.subContainer}>
          <Image
            className={styles.logoContainer}
            src={logoCodigoCerto}
            alt="Description"
            width={60}
            height={40}
          />
          <h1 className={styles.titleConatinerForm}>Código Certo Coders</h1>
        </div>

        <form className={styles.form}>
          <h1 className={styles.titleForm}>Esqueci minha senha</h1>
          <p className={styles.paragraphForm}>
            Insira seu e-mail abaixo e enviaremos um link para redefinição de
            senha.
          </p>

          <p className={styles.paragraphField}>Email*</p>
          <div className={styles.formField}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Digite seu email"
            />
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.buttonRecuperar}>
              Recuperar minha senha
            </button>

            <Link href="/login" className={styles.buttonLogin}>
              <FaArrowLeft className={styles.arrowLeft} />
              Voltar para o login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

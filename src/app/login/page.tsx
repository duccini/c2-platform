import styles from "./page.module.css";

import logoCodigoCerto from "../../../public/images/codigocerto.svg";
import Link from "next/link";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Image from "next/image";
import BackgroundStyle from "@/components/Container-login/page";

export default function LoginUser() {
  return (
    <div className={styles.loginUserContainer}>
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
          <h1 className={styles.titleForm}>Acessar sua conta</h1>
          <p className={styles.paragraphForm}>
            Informe seu e-mail e senha para acessar sua conta.
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

          <p className={styles.paragraphField}>Senha*</p>
          <div className={styles.formField}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="checkbox1" />
              <div className="custom-checkbox"></div>
              <span>Manter conectado</span>
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Criar conta
            </button>

            <p className={styles.signupLink}>
              Não tem uma conta?
              <span>
                <Link href="/cadastro" className={styles.linkLogin}>
                  Criar uma conta
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
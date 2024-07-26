import styles from "./page.module.css";

import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";

import logoCodigoCerto from "public/images/codigocerto.svg";

export default function LoginUser() {
  return (
    <div className={styles.loginUserContainer}>
      <div className={styles.containerForm}>
        <div className={styles.subContainer}>
          <Image
            className={styles.logoContainer}
            src={logoCodigoCerto}
            alt="Logo Codigo Certo"
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

          <button type="submit" className={styles.buttonSubmit}>
            Criar conta
          </button>

          <div className={styles.submitContainer}>
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

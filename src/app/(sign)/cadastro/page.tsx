import Image from "next/image";
import styles from "./page.module.css";

import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";

import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function CadastroUser() {
  return (
    <div className={styles.newUserContainer}>
      <BackgroundStyle />

      <div className={styles.containerForm}>
     
      
        <form className={styles.form}>
        <div className={styles.subContainer}>
       <Link href='/'>
       <Image
            className={styles.logoContainer}
            src={logoCodigoCerto}
            alt="Logo codigo certo"
            width={48}
            height={32}
          />
       </Link>
          <h1 className={styles.titleContainerForm}>Código Certo Coders</h1>
        </div>
          <h1 className={styles.titleForm}>Criar conta</h1>
          <p className={styles.paragraphForm}>
            Preencha os campos abaixo para criar sua conta.
          </p>

          <p className={styles.paragraphField}>Nome*</p>
          <div className={styles.formField}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite seu nome"
            />
          </div>

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

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Criar conta
            </button>

            <p className={styles.signupLink}>
              Já tem uma conta?
              <span>
                <Link href="/login" className={styles.linkLogin}>
                  Fazer login.
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

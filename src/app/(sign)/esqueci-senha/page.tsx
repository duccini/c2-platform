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
           <Link href="/recuperar-senha">
             Recuperar minha senha 
           </Link>
            </button>
           <button className={styles.buttonVoltar}>
            
           <Link href="/login" className={styles.linkLogin}>
              <FaArrowLeft className={styles.arrowLeft} />
              Voltar para o login
            </Link>
           </button>
          </div>
        </form>
      </div>
    </div>
  );
}

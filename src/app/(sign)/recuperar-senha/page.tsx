import styles from "./page.module.css";
import Image from "next/image";

import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";
import Link from "next/link";

export default function RecuperarSenha() {
  return (
    <div className={styles.containerRecuperarSenha}>
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

          <h1 className={styles.titleForm}>Recuperar senha</h1>
          <p className={styles.paragraphForm}>
            Insira o código de 6 dígitos enviado para{" "}
            <span>email@email.com</span>
          </p>

          <div className={styles.formField}>
            <input type="text" className={styles.inputNumber} />
            <input type="text" className={styles.inputNumber} />
            <input type="text" className={styles.inputNumber} />
            <input type="text" className={styles.inputNumber} />
            <input type="text" className={styles.inputNumber} />
            <input type="text" className={styles.inputNumber} />
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.buttonRecuperar}>
              Confirmar
            </button>

            <button type="submit" className={styles.buttonLogin}>
              Reenviar código
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

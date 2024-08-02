import styles from "./page.module.css";
import Image from "next/image";

import logoCodigoCerto from "public/images/codigocerto.svg";
import BackgroundStyle from "@/components/ContainerLogin/page";

export default function RecuperarSenha() {
  return (
    <div className={styles.containerRecuperarSenha}>
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

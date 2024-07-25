import styles from "./page.module.css";
import Image from "next/image";

import logoCodigoCerto from "../../../public/images/codigocerto.svg";
import BackgroundStyle from "@/components/Container-login/page";

export default function RedefinirSenha() {
  return (
    <div className={styles.containerRedefinirSenha}>
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
          <h1 className={styles.titleForm}>Redefinir senha</h1>
          <p className={styles.paragraphForm}>Insira sua nova senha.</p>

          <p className={styles.paragraphField}>Nova Senha*</p>
          <div className={styles.formField}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Deve conter no mínimo 8 caracteres"
            />
          </div>

          <p className={styles.paragraphField}>Confirmar nova senha*</p>
          <div className={styles.formField}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Deve conter no mínimo 8 caracteres"
            />
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Alterar senha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

import logoCodigoCerto2 from "public/images/codigocerto2.svg";
import backgroundContainer from "public/images/image.png"

export default function BackgroundStyle() {
  return (
    <div className={styles.card}>
      <div className={styles.mask}>
        <Image
          className={styles.logoContainer}
          src={logoCodigoCerto2}
          alt="Description"
          width={60}
          height={40}
        />
        <Image
          src={backgroundContainer}
          alt="background"
          className={styles.backgroundContainer}
        />
        <div className={styles.containerInferior}>
          <p className={styles.containerTitle}>
            Construa seu futuro com a <br />
            <span className={styles.negritoText}>Código Certo Coders!</span>
          </p>
          <p className={styles.containerParagraph}>
            Junte-se à nossa jornada de inovação e aprendizado!
          </p>
        </div>
      </div>
    </div>
  );
}
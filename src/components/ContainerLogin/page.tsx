import Image from "next/image";
import styles from "./page.module.css";

import logoCodigoCerto2 from "public/images/codigocerto2.svg";
import Link from "next/link";

export default function BackgroundStyle() {
  return (
    <div className={styles.card}>
      <div className={styles.mask}>
        <Link href="/">
        <Image
          className={styles.logoContainer}
          src={logoCodigoCerto2}
          alt="Description"
          width={48}
          height={32}
        />
        </Link>
        <div className={styles.vector}>
          <div className={styles.vector1}></div>
          <div className={styles.vector2}></div>
          <div className={styles.vector3}></div>
        </div>

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

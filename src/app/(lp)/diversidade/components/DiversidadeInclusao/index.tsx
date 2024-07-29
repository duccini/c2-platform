import Image from "next/image";
import styles from "./styles.module.css";

const DiversidadeInclusao = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/img-inclusão.svg"
          alt="Diversidade e Inclusao"
          className={styles.image}
          width={1120}
          height={191}
          quality={100}
          priority
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Diversidade e Inclusão</h2>
        <p className={styles.paragraph}>
          Nós reconhecemos que a diversidade é uma força poderosa que impulsiona a inovação, criatividade e progresso.
        </p>
      </div>
    </section>
  );
};

export default DiversidadeInclusao;
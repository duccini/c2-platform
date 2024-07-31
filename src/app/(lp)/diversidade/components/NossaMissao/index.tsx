import Image from "next/image";
import styles from "./styles.module.css";

const NossaMissao = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>NOSSA MISSÃO</h2>
          <p className={styles.paragraph}>
            Estamos comprometidos em criar um ambiente inclusivo, onde pessoas de todas as origens, identidades e experiências se sintam valorizadas, respeitadas e capacitadas a alcançar seu pleno potencial.
          </p>
          <p className={styles.paragraph}>
            Acreditamos que a diversidade vai além das diferenças óbvias, como raça, gênero ou orientação sexual. Ela engloba uma ampla gama de características, incluindo origem étnica, idade, habilidades físicas e mentais, experiências de vida e perspectivas culturais.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/img-reunião.svg"
            alt="Nossa Missão"
            className={styles.image}
            width={515}
            height={325}
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default NossaMissao;
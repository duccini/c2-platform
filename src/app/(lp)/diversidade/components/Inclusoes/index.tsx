import React from 'react';
import styles from './styles.module.css';

const Inclusoes: React.FC = () => { 
  return (
    <section className={styles.section}>
      <div className={styles.imagesWrapper}>
        <img className={styles.image} src="/images/diversidade4.png" alt="Image 1" />
        <img className={styles.image} src="/images/diversidade3.png" alt="Image 2" />
        <img className={styles.image} src="/images/diversidade2.png" alt="Image 3" />
        <img className={styles.image} src="/images/diversidade1.png" alt="Image 4" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textItem}>
          <div className={styles.title}>InclusãoTech</div>
          <div className={styles.text}>
            Programa para capacitar pessoas LGBTQIA+ em tecnologia, com cursos de programação, design e software, em um ambiente inclusivo e acolhedor.
          </div>
        </div>
        <div className={styles.textItem}>
          <div className={styles.title}>TechAfro</div>
          <div className={styles.text}>
            Programa para pessoas com deficiência, oferecendo cursos de desenvolvimento de software, design acessível e habilidades tecnológicas. A InclusãoTec assegura materiais e ambientes acessíveis, além de suporte personalizado para atender às necessidades individuais.
          </div>
        </div>
        <div className={styles.textItem}>
          <div className={styles.title}>Tech4All</div>
          <div className={styles.text}>
            Iniciativa para incluir pessoas negras na tecnologia. O TechAfro oferece cursos de programação, ciência de dados e IA, além de mentorias, visando criar uma rede de apoio e oportunidades para avanço profissional.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inclusoes;
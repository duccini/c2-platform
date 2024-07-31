import React from 'react';
import styles from './styles.module.css';


const Inclusoes = () => {
  return (
<section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/images/diversidade1.png" alt="Diversidade 1" className={styles.img4} />
          <img src="/images/diversidade2.png" alt="Diversidade 2" className={styles.img3} />
          <img src="/images/diversidade3.png" alt="Diversidade 3" className={styles.img2} />
          <img src="/images/diversidade4.png" alt="Diversidade 4" className={styles.img1} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text1}>
            <div className={styles.title1}>InclusãoTech</div>
            Programa para capacitar pessoas LGBTQIA+ em tecnologia, com cursos de programação, design e software, em um ambiente inclusivo e acolhedor.
          </div>
          <div className={styles.text2}>
            <div className={styles.title2}>TechAfro</div>
            Programa para pessoas com deficiência, oferecendo cursos de desenvolvimento de software, design acessível e habilidades tecnológicas. A InclusãoTec assegura materiais e ambientes acessíveis, além de suporte personalizado para atender às necessidades individuais.
          </div>
          <div className={styles.text3}>
            <div className={styles.title3}>Tech4All</div>
            Iniciativa para incluir pessoas negras na tecnologia. O TechAfro oferece cursos de programação, ciência de dados e IA, além de mentorias, visando criar uma rede de apoio e oportunidades para avanço profissional.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inclusoes;
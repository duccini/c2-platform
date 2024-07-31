import React from 'react';
import styles from './styles.module.css';

const Inclusoes: React.FC = () => {
  return (
<section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image1} src="https://via.placeholder.com/260x160" alt="Imagem 1" />
        <img className={styles.image2} src="https://via.placeholder.com/260x179" alt="Imagem 2" />
        <img className={styles.image3} src="https://via.placeholder.com/260x241" alt="Imagem 3" />
        <img className={styles.image4} src="https://via.placeholder.com/260x186" alt="Imagem 4" />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text1}>Programa para capacitar pessoas LGBTQIA+ em tecnologia, com cursos de programação, design e software, em um ambiente inclusivo e acolhedor.</div>
        <div className={styles.text2}>Programa para pessoas com deficiência, oferecendo cursos de desenvolvimento de software, design acessível e habilidades tecnológicas. A InclusãoTec assegura materiais e ambientes acessíveis, além de suporte personalizado para atender às necessidades individuais.</div>
        <div className={styles.text3}>Iniciativa para incluir pessoas negras na tecnologia. O TechAfro oferece cursos de programação, ciência de dados e IA, além de mentorias, visando criar uma rede de apoio e oportunidades para avanço profissional.</div>
        <div className={styles.title1}>InclusãoTech</div>
        <div className={styles.title2}>TechAfro</div>
        <div className={styles.title3}>Tech4All</div>
      </div>
    </section>
  );
};

export default Inclusoes;
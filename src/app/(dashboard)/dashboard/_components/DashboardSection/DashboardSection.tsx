'use client'; 

import React from 'react';
import styles from './DashboardSection.module.css';

const DashboardSection = () => {
  const handleCardClick = (title: string) => {
    alert(`${title} clicked`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} onClick={() => handleCardClick('Projetos')}>
        <div className={styles.cardContent}>
          <div className={styles.iconWrapper} style={{ background: '#6C9B68' }}>
            <div className={styles.icon}>
              <img src="/images/ant-design_project-filled.svg" alt="Projetos" />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.title}>Projetos</div>
            <div className={styles.subtitle}>12 Projetos realizados</div>
          </div>
        </div>
      </div>
      <div className={styles.card} onClick={() => handleCardClick('Equipes')}>
        <div className={styles.cardContent}>
          <div className={styles.iconWrapper} style={{ background: '#7EB2D0' }}>
            <div className={styles.icon}>
              <img src="/images/fa-solid_users.svg" alt="Equipes" />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.title}>Equipes</div>
            <div className={styles.subtitle}>12 Equipes cadastradas</div>
          </div>
        </div>
      </div>
      <div className={styles.card} onClick={() => handleCardClick('Trilhas')}>
        <div className={styles.cardContent}>
          <div className={styles.iconWrapper} style={{ background: '#DF4242' }}>
            <div className={styles.icon}>
              <img src="/images/Page.svg" alt="Trilhas" />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.title}>Trilhas</div>
            <div className={styles.subtitle}>12 Trilhas realizadas</div>
          </div>
        </div>
      </div>
      <div className={styles.card} onClick={() => handleCardClick('Eventos')}>
        <div className={styles.cardContent}>
          <div className={styles.iconWrapper} style={{ background: '#464242' }}>
            <div className={styles.icon}>
              <img src="/images/calendar.svg" alt="Eventos" />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.title}>Eventos</div>
            <div className={styles.subtitle}>12 Eventos marcados</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
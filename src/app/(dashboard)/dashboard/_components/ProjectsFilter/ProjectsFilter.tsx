'use client';

import React, { useState } from 'react';
import styles from './ProjectsFilter.module.css';

const ProjectsFilter = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    // Aqui da para adicionar a lógica adicional que deseja executar ao clicar no filtro
    console.log(`${filter} clicked`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Todos os projetos</div>
      </div>
      <div className={styles.filters}>
        <div
          className={`${styles.filterItem} ${activeFilter === 'Todos' ? styles.active : ''}`}
          onClick={() => handleFilterClick('Todos')}
        >
          Todos
        </div>
        <div
          className={`${styles.filterItem} ${activeFilter === 'Inicial' ? styles.active : ''}`}
          onClick={() => handleFilterClick('Inicial')}
        >
          Inicial
        </div>
        <div
          className={`${styles.filterItem} ${activeFilter === 'Profissional' ? styles.active : ''}`}
          onClick={() => handleFilterClick('Profissional')}
        >
          Profissional
        </div>
        <div
          className={`${styles.filterItem} ${activeFilter === 'Lorem' ? styles.active : ''}`}
          onClick={() => handleFilterClick('Lorem')}
        >
          Lorem
        </div>
      </div>
    </div>
  );
};

export default ProjectsFilter;

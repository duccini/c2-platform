import React from 'react';
import styles from './page.module.css';
import Navbar from './_components/Header/Navbar';
import DashboardSection from './_components/DashboardSection/DashboardSection';
import ProjectsFilter from './_components/ProjectsFilter/ProjectsFilter';
import CardComponent from './_components/CardComponent/CardComponent';

const Page = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <DashboardSection />
        <ProjectsFilter />
        <CardComponent />
      </main>
    </div>
  );
};

export default Page;
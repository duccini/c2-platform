import React from 'react';
import Cards from './Cards/Cards';
import styles from './CardComponent.module.css';

const CardComponent: React.FC = () => {
    return (
        <div className={styles.cardComponent}>
            <Cards />
        </div>
    );
};

export default CardComponent;

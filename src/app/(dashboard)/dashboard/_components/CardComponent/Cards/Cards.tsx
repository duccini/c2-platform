'use client'; // garante que o componente seja tratado como Client Component

import React from 'react';
import styles from './Cards.module.css';

const cards = [
  { 
    image: '/images/lorem-card1.png', 
    date: 'Maio 2024',
    team: 'Equipe White',
    status: 'Inicial',
    avatars: ['/images/Ellipse40.svg', '/images/Ellipse41.svg', '/images/Ellipse42.svg']
  },
  { 
    image: '/images/lorem-card2.png', 
    date: 'Maio 2024',
    team: 'Equipe Blue',
    status: 'Profissional',
    avatars: ['/images/Ellipse40.svg', '/images/Ellipse41.svg', '/images/Ellipse42.svg']
  },
  { 
    image: '/images/lorem-card3.png', 
    date: 'Maio 2024',
    team: 'Equipe Green',
    status: 'Inicial',
    avatars: ['/images/Ellipse40.svg', '/images/Ellipse41.svg', '/images/Ellipse42.svg']
  },
  { 
    image: '/images/lorem-card4.png', 
    date: 'Maio 2024',
    team: 'Equipe Red',
    status: 'Profissional',
    avatars: ['/images/Ellipse40.svg', '/images/Ellipse41.svg', '/images/Ellipse42.svg']
  }
];

interface CardProps {
  image: string;
  date: string;
  team: string;
  status: string;
  avatars: string[];
}

const Card = ({ image, date, team, status, avatars }: CardProps) => (
  <div className={styles.card} onClick={() => alert('Card clicked!')}>
    <div className={styles.imageWrapper}>
      <img src={image} alt="Card" className={styles.image} />
    </div>
    <div className={styles.textContent}>
      <div className={styles.title}>Lorem ipsum dolor</div>
      <div className={styles.details}>
        <div className={styles.team}>
          <div className={styles.teamName}>{team}</div>
          <div className={styles.avatarContainer}>
            {avatars.map((avatar, index) => (
              <img src={avatar} alt={`Avatar ${index}`} key={index} className={styles.avatar} />
            ))}
          </div>
        </div>
        <div className={styles.status}>{status}</div>
      </div>
      <div className={styles.date}>
        <img src="/images/calendar.svg" alt="Calendar Icon" className={styles.calendarIcon} />
        <span className={styles.dateText}>{date}</span>
      </div>
    </div>
  </div>
);

const Cards = () => (
  <div className={styles.container}>
    {cards.map((card, index) => (
      <Card 
        key={index} 
        image={card.image} 
        date={card.date} 
        team={card.team} 
        status={card.status} 
        avatars={card.avatars} 
      />
    ))}
  </div>
);

export default Cards;
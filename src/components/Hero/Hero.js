import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.heading}>Fun Library Name</h1>
    </div>
  </div>
);

Hero.propTypes = {};

export default Hero;
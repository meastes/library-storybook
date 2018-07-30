import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './Description.module.scss';

export default () => (
  <div className={styles.description}>
    <Typography component="p" className={styles.quote}>
      "A warning: If you rip, tear, shred, bend, fold, deface, disfigure, smear, smudge, throw,
      drop, or in any other manner damage, mistreat, or show lack of respect towards this book, the
      consequences will be as awful as it is within my power to make them."
    </Typography>
    <Typography component="p" className={styles.attribution}>
      - Madam Irma Pince, Hogwarts Head Librarian
    </Typography>
  </div>
);

import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './Description.module.scss';

export default () => (
  <Typography component="p" className={styles.description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula odio, rhoncus quis urna
    dapibus, vehicula interdum urna. Nullam condimentum magna id sapien feugiat, non consectetur
    lacus fringilla.
  </Typography>
);

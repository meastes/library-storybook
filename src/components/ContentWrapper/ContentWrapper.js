import Paper from '@material-ui/core/Paper';
import React from 'react';
import styles from './ContentWrapper.module.scss';

export default ({ children }) => (
  <div className={styles.contentWrapper}>
    <Paper className={styles.paper} elevation={1}>
      {children}
    </Paper>
  </div>
);

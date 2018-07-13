import React from 'react';
import { Button, TextField, Typography } from '../../../node_modules/@material-ui/core';
import styles from './BookSearch.module.scss';

export default () => (
  <form>
    <Typography component="h2" variant="headline">
      Book Search
    </Typography>
    <div className={styles.fields}>
      <TextField label="Title" />
      <TextField label="Author" />
      <TextField label="ISBN" />
    </div>
    <div className={styles.footer}>
      <Button variant="contained" color="primary">
        Search
      </Button>
    </div>
  </form>
);

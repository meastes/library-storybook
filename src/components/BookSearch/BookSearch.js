import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import styles from './BookSearch.module.scss';

export default ({ onSearch }) => (
  <form onSubmit={onSearch}>
    <Typography component="h2" variant="headline">
      Book Search
    </Typography>
    <div className={styles.fields}>
      <TextField label="Title" />
      <TextField label="Author" />
      <TextField label="ISBN" />
    </div>
    <div className={styles.footer}>
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </div>
  </form>
);

import { Button, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './BookSearch.module.scss';

const BookSearch = ({ onSearch }) => (
  <form method="get" onSubmit={onSearch}>
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

BookSearch.propTypes = {
  onSearch: PropTypes.func
};

export default BookSearch;
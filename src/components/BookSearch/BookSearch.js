import React from 'react';
import { Button, TextField } from '../../../node_modules/@material-ui/core';

export default () => (
  <form>
    <TextField label="Title" />
    <TextField label="Author" />
    <TextField label="ISBN" />
    <Button variant="contained" color="primary">
      Search
    </Button>
  </form>
);

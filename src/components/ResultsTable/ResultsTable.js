import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';

export default ({ results, onCheckout }) =>
  results ? (
    <React.Fragment>
      <Typography component="h2" variant="headline">
        Search Results
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((book) => (
            <TableRow>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => onCheckout(book)}>
                  Checkout
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  ) : null;

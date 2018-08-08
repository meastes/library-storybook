import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const ResultsTable = ({ results, onCheckout }) =>
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
            <TableRow key={book.isbn}>
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

ResultsTable.propTypes = {
  /**
   * List of books from the current search.
   */
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      isbn: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /**
   * Handler function to call when a book is checked out.
   */
  onCheckout: PropTypes.func.isRequired,
};

export default ResultsTable;

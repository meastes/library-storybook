import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import BookCheckout from '../BookCheckout';

const ResultsTable = ({ results, onCheckout, modalOpen, activeBook, handleModalClose }) =>
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
      {activeBook ? (
        <BookCheckout
          modalOpen={modalOpen}
          book={activeBook}
          handleModalClose={() => handleModalClose()}
        />
      ) : null}
    </React.Fragment>
  ) : null;

ResultsTable.propTypes = {
  results: PropTypes.array,
  onCheckout: PropTypes.func,
  modalOpen: PropTypes.bool,
  activeBook: PropTypes.object,
  handleModalClose: PropTypes.func,
};

export default ResultsTable;

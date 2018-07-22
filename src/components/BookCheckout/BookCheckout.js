import { Modal, Typography } from '@material-ui/core';
import React from 'react';
import styles from './BookCheckout.module.scss';

export default ({ modalOpen, book, handleModalClose }) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
    >
      <div className={styles.modal}>
        <Typography variant="title" id="modal-title">
          Checkout Confirmation
        </Typography>
        <Typography variant="body1" id="simple-modal-description">
          Would you like to check out <span className={styles.bookTitle}>{book.title}</span>?
        </Typography>
      </div>
    </Modal>
  )
};

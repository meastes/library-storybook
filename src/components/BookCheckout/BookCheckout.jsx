import { Button, Modal, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './BookCheckout.module.scss';

const BookCheckout = ({ isModalOpen = true, book, handleModalClose }) => {
  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
      <div className={styles.modal}>
        <div className={styles.modalTitle}>
          <Typography variant="title" id="modal-title">
            Checkout Confirmation
          </Typography>
        </div>
        <div className={styles.modalBody}>
          <Typography variant="body1" id="simple-modal-description">
            Would you like to check out <span className={styles.bookTitle}>{book.title}</span>?
          </Typography>
        </div>
        <div className={styles.modalFooter}>
          <Button variant="contained" color="primary" onClick={() => handleModalClose()}>
            Yes
          </Button>
          <Button variant="contained" onClick={() => handleModalClose()}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

BookCheckout.propTypes = {
  /**
   * Flag to indicate whether the modal should be displayed as open.
   */
  isModalOpen: PropTypes.bool,
  /**
   * Book that is being checked out.
   */
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * Handler function to call when a close has been requested by the modal.
   */
  handleModalClose: PropTypes.func.isRequired,
};

export default BookCheckout;

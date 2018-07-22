import { Button, Modal, Typography } from '@material-ui/core';
import React from 'react';
import styles from './BookCheckout.module.scss';

export default ({ modalOpen, book, handleModalClose }) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
    >
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
  )
};
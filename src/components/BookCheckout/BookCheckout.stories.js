import { Button } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import BookCheckout from './';

const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: 'J.K. Rowling',
  isbn: '0439708184',
};

class ToggleabbleBookCheckout extends React.Component {
  state = {
    open: false,
  };
  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.toggleModal}>
          Open Modal
        </Button>
        <BookCheckout
          {...this.props}
          isModalOpen={this.state.open}
          handleModalClose={this.toggleModal}
        />
      </div>
    );
  }
}

const storybook = storiesOf('Book Checkout Modal');

storybook.add(
  '-Info-',
  withInfo({
    inline: true,
    propTables: [BookCheckout],
    text: 'BookCheckout is a modal which prompts users to confirm a checkout request',
  })(() => <ToggleabbleBookCheckout book={book} handleModalClose={action('Close Modal')} />),
);

storybook.add(
  'Basic',
  withInfo()(() => (
    <BookCheckout isModalOpen={true} book={book} handleModalClose={action('Close Modal')} />
  )),
);

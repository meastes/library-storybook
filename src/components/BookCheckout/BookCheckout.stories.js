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

const storybook = storiesOf('Book Checkout Modal');

storybook.add(
  '-Info-',
  withInfo({
    inline: true,
    text: 'BookCheckout is a modal which prompts users to confirm a checkout request',
  })(() => (
    <BookCheckout isModalOpen={true} book={book} handleModalClose={action('Close Modal')} />
  )),
);

storybook.add(
  'Basic',
  withInfo()(() => (
    <BookCheckout isModalOpen={true} book={book} handleModalClose={action('Close Modal')} />
  )),
);

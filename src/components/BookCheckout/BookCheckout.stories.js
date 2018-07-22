import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import BookCheckout from './';

const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: 'J.K. Rowling',
  isbn: '0439708184',
}

const storybook = storiesOf('Book Checkout Modal');
storybook.add('Basic', () => (
  <BookCheckout modalOpen={true} book={book} handleModalClose={action('Close Modal')} />
));

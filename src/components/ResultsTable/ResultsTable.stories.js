import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import ResultsTable from './';

const mockResults = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    isbn: '0439708184',
  },
  {
    title: 'Harry Potter and The Chamber Of Secrets',
    author: 'J.K. Rowling',
    isbn: '0439064872',
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    isbn: '0439136369',
  },
];

const storybook = storiesOf('Results Table');

storybook.add(
  '-Info-',
  withInfo({
    inline: true,
    propTables: [ResultsTable],
    text: 'The Results Table displays a list of books that match query criteria.'
  })(() => (
    <ResultsTable
      results={mockResults}
      onCheckout={action('Checkout')}
      modalOpen={false}
      activeBook={null}
      onCheckout={action('Close Modal')}
    />
  ))
);

storybook.add('Basic', withInfo({ propTables: [ResultsTable] })(() => (
  <ResultsTable
    results={mockResults}
    onCheckout={action('Checkout')}
    modalOpen={false}
    activeBook={null}
    onCheckout={action('Close Modal')}
  />
)));

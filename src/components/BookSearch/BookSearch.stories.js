import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import BookSearch from './';

const storybook = storiesOf('Book Search Form');

storybook.add(
  '-Info-',
  withInfo({
    inline: true,
    propTables: [BookSearch],
    text: 'BookSearch is a form used to search the library\'s catalogs'
  })(() => (
    <BookSearch onSearch={action('Search')} />
  ))
);

storybook.add('Basic', withInfo({ propTables: [BookSearch] })(() => (
  <BookSearch onSearch={action('Search')} />
)));

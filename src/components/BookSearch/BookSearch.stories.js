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
    text: "BookSearch is a form used to search the library's catalogs",
  })(() => <BookSearch onSearch={action('Search')} />),
);

storybook.add('Basic', withInfo()(() => <BookSearch onSearch={action('Search')} />));

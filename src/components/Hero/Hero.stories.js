import { storiesOf } from '@storybook/react';
import React from 'react';
import Hero from './';

const storybook = storiesOf('Hero');
storybook.add('Basic', () => (
  <Hero />
));

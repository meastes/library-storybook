import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Hero from './';

const storybook = storiesOf('Hero');
storybook.add('Basic', withInfo()(() => (
  <Hero />
)));

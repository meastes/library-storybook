import blue from '@material-ui/core/colors/blue';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure as configureStories } from '@storybook/react';
import React from 'react';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const req = require.context('../src/components', true, /\.stories\.js$/);

function initialize() {
  configureAddOns();
  configurePage();
  configureStories(loadStories, module);
}

function configureAddOns() {
  setOptions({
    name: 'Fun Library Name',
    url: 'https://github.com/meastes/library-storybook',
  });
}

function configurePage() {
  addDecorator((story) => {
    return <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>;
  });
}

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

initialize();

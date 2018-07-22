import blue from '@material-ui/core/colors/blue';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { addDecorator, configure as configureStories } from '@storybook/react';
import React from 'react';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const req = require.context('../src/components', true, /\.stories\.js$/);

function initialize() {
  configurePage();
  configureStories(loadStories, module);
}

function configurePage() {
  addDecorator((story) => {
    return (
      <MuiThemeProvider theme={theme}>
        {story()}
      </MuiThemeProvider>

    )
  })
}

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

initialize();

import blue from '@material-ui/core/colors/blue';
import {
  createGenerateClassName,
  createMuiTheme,
  jssPreset,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure as configureStories } from '@storybook/react';
import { create } from 'jss';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';

// Ensures JSS is inserted first to allow overriding JSS styles
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

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
    name: "Madam Pince's Catalog",
    url: 'https://github.com/meastes/library-storybook',
  });
}

function configurePage() {
  addDecorator((story) => {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
      </JssProvider>
    );
  });
}

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

initialize();

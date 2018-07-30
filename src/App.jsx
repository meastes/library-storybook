import blue from '@material-ui/core/colors/blue';
import {
  MuiThemeProvider,
  createGenerateClassName,
  createMuiTheme,
  jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import styles from './App.module.scss';
import BookCheckout from './components/BookCheckout';
import BookSearch from './components/BookSearch/BookSearch';
import ContentWrapper from './components/ContentWrapper';
import Description from './components/Description';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ResultsTable from './components/ResultsTable';

// Ensures JSS is inserted first to allow overriding JSS styles
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const mockResults = [
  {
    title: 'Tales of Beedle the Bard',
    author: 'Beedle the Bard',
    isbn: '0439708184',
  },
  {
    title: 'Quidditch Through the Ages',
    author: 'Kennilworthy Whisp',
    isbn: '0439064872',
  },
  {
    title: 'Gadding with Ghouls',
    author: 'Gilderoy Lockhart',
    isbn: '0439136369',
  },
  {
    title: 'Fantastic Beasts and Where to Find Them',
    author: 'Newton Scamander',
    isbn: '0439975346',
  },
  {
    title: 'Magical Water Plants of the Highland Lochs',
    author: 'Hadrian Whittle',
    isbn: '0439740217',
  },
  {
    title: 'Cooking the Muggle Way',
    author: 'Mordicus Egg',
    isbn: '0439276401',
  },
];

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default class App extends React.Component {
  state = {
    results: null,
    activeBook: null,
    modalOpen: false,
  };
  onSearch = (event) => {
    event.preventDefault();
    this.setState({ results: mockResults });
  };
  onCheckout = (book) => {
    this.setState({ modalOpen: true, activeBook: book });
  };
  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <header>
            <Hero />
          </header>
          <main className={styles.main}>
            <Description />
            <ContentWrapper>
              <BookSearch onSearch={this.onSearch} />
              <ResultsTable
                results={this.state.results}
                onCheckout={this.onCheckout}
                modalOpen={this.state.modalOpen}
                activeBook={this.state.activeBook}
                handleModalClose={this.handleModalClose}
              />
              {this.state.activeBook ? (
                <BookCheckout
                  isModalOpen={this.state.modalOpen}
                  book={this.state.activeBook}
                  handleModalClose={this.handleModalClose}
                />
              ) : null}
            </ContentWrapper>
          </main>
          <footer>
            <Footer />
          </footer>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

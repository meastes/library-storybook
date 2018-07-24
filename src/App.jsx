import blue from '@material-ui/core/colors/blue';
import {
  createGenerateClassName,
  createMuiTheme,
  jssPreset,
  MuiThemeProvider,
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

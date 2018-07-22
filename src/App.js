import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import styles from './App.module.scss';
import BookSearch from './components/BookSearch/BookSearch';
import ContentWrapper from './components/ContentWrapper';
import Description from './components/Description';
import Hero from './components/Hero';
import ResultsTable from './components/ResultsTable/ResultsTable';

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
];

export default class App extends React.Component {
  state = {
    results: null,
  };
  onSearch = (event) => {
    event.preventDefault();
    this.setState({ results: mockResults });
  };
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div className={styles.app}>
          <header>
            <Hero />
          </header>
          <main className={styles.main}>
            <Description />
            <ContentWrapper>
              <BookSearch onSearch={this.onSearch} />
              <ResultsTable results={this.state.results} />
            </ContentWrapper>
          </main>
        </div>
      </JssProvider>
    );
  }
}

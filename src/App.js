import React, { Component } from 'react';
import styles from './App.module.scss';
import ContentWrapper from './components/ContentWrapper';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header>
          <Hero />
        </header>
        <ContentWrapper>Content Here</ContentWrapper>
      </div>
    );
  }
}

export default App;

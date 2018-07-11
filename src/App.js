import React, { Component } from 'react';
import styles from './App.module.scss';
import ContentWrapper from './components/ContentWrapper';
import Description from './components/Description';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header>
          <Hero />
        </header>
        <main>
          <Description />
          <ContentWrapper>Content Here</ContentWrapper>
        </main>
      </div>
    );
  }
}

export default App;

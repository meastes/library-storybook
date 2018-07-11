import React, { Component } from 'react';
import styles from './App.module.scss';
import ContentWrapper from './components/ContentWrapper';
import Hero from './components/Hero';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Hero />
        <ContentWrapper>Content Here</ContentWrapper>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

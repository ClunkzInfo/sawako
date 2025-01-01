import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import styles from './components/Main.module.css'

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
  
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import styles from './components/Main.module.css'

function App() {

    const [isMenuOpen,toggleMenu] = useState(false)

    const toggle = () => {

        if(isMenuOpen) { 
            toggleMenu(false)
        } else { 
            toggleMenu(true)
        }


    }


  return (
    <div className={styles.App}>
      <Header isMenuOpen={isMenuOpen} toggleHandler={toggle}/>
      <Main isMenuOpen={isMenuOpen}/>
      <Footer/>
    </div>
  )
  
}

export default App;

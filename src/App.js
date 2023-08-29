import React from 'react'
import './App.css';
import './index.css';
import { Brand, CTA, Navbar } from './components/index';
import { Footer, Blog, Possibility, Features, Whatgpt3, Header } from './containers/index';

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

import React from 'react';
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
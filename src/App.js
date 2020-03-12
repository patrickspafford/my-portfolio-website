import React from 'react';
import Header from './components/HeaderFooter/Header';
import Home from './components/HomePage/Home';
import Footer from './components/HeaderFooter/Footer';
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
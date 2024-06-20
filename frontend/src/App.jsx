import React from 'react'
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category/>
    </>
  );
};

export default App
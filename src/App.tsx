import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  return (
    <div className="App">
        <Section1/>
        <Section2/>
        <Section4/>
        <Section3/>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar title="Harsh PWA" />
      <div className="container">
        <TextForm heading="Enter your query"/>
      </div>
    </div>
  );
}

export default App;

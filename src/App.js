import React from 'react';
import Anagram from './Anagram';
import './App.css';

const App = () => {
  const words= ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

  return (
    <div className="App">
      <h1>[{words.toString().replace(/,/g, ", ")}]</h1>
      <Anagram words={words} />
    </div>
  );
}

export default App;

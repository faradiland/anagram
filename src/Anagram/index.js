import React, { useState, useEffect } from 'react';

const Anagram = ({ words }) => {
  const [result, setResult] = useState({})

  const anagramGrouping = (words) => {
    let result = {};
    for (let word of words) {
      let splitWord = word.split("").sort().join("");
      if (result[splitWord]) {
        result[splitWord].push(word);
      } else {
        result[splitWord] = [word];
      }
    }
    setResult(Object.values(result))
    console.log('OUTPUT', Object.values(result))
    return Object.values(result);
  }

  useEffect(() => {
    anagramGrouping(words)
  }, [words]);

  return (
    <div className="anagram">
      <h2>Output :</h2>
      {result.length ? result.map((item, i) =>
        <div key={i}>
          {item.map((itm, j) =>
            <span key={j}>{itm} {j === itm.length - 1 ? ', ' : null}</span>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Anagram
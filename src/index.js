import React from 'react';
import ReactDOM from 'react-dom/client';

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"
// Afterward, render it

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainContent () {
  return (
    <h1>I'm learning React!</h1>
  )
}


root.render(
  <MainContent/>
);

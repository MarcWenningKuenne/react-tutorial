import React from 'react';
import ReactDOM from 'react-dom/client';

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/

const root = ReactDOM.createRoot(document.getElementById('root'));

function GetReasonsWhyIAmExcited() {
  return (
    <ol>
      <li>Ich möchte gerne programmieren lernen</li>
      <li>Das direkte Feedback über die Oberfläche hält mich bei Laune</li>
      <li>React scheint die modernste und vielversprechenste Front-End-Sprache</li>
    </ol>
  )
}

root.render(
  <GetReasonsWhyIAmExcited />, root
);



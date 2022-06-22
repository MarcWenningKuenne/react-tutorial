import React from 'react';
import ReactDOM from 'react-dom/client';

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

const root = ReactDOM.createRoot(document.getElementById('root'));

function Navbar() {
  return(
    <img src='./images/react-logo.png' width="40"></img>
  )
}

function Headline() {
  return (
    <h1>Reasons I'm excited to learn React</h1>
  )
}

function ReasonsWhyIAmExcited() {
  return (
    <ol>
      <li>Ich möchte gerne programmieren lernen</li>
      <li>Das direkte Feedback über die Oberfläche hält mich bei Laune</li>
      <li>React scheint die modernste und vielversprechenste Front-End-Sprache</li>
    </ol>
  )
}

function Footer() {
  return (
    <footer>© 2022 Wenning-Künne development. All rights reserved.</footer>
  )
}

function Page() {
  return (
    <div>
      <Navbar />
      <Headline />
      <ReasonsWhyIAmExcited />
      <Footer />
    </div>
  )
  
}

root.render(
  <Page />, root
);



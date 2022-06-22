import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

function Navbar() {
  return(
    <header>
      <nav className='nav'>
        <img className='nav-logo' src='./images/react-logo.png'></img>
        <ul className='nav-items'>
          <li className='navbar-li'>Pricing</li>
          <li className='navbar-li'>About</li>
          <li className='navbar-li'>Contact</li>
        </ul>
      </nav>
    </header>
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



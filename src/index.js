import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

root.render(
  <Page />, root
);



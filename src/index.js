import React from 'react';
import ReactDOM from 'react-dom/client';

//const root = ReactDOM.createRoot(document.getElementById('root'));

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
  <div>
    <nav>
      <h1>Dies ist die Naviagationsbar</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div>
      <h1>Dies ist der Hauptteil der Seite</h1>
      <h2>Dies ist eine h2 Überschrift</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
    </div>
  </div>
)

document.getElementById("root").append(page);

//Der Browser zeigt uns ein Objekt an, da aus dem JSX ein Objekt erzeugt wird. Erst das render erzeugt daraus HTML

/*
root.render(
  page, root
);
*/


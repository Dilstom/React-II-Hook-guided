import React from 'react';
import Info, { Hobbies } from './info';
import Button from './Button';

function App() {
 return (
  <div className="App">
   <header className="App-header">
    <p>
     Edit <code>src/App.js</code> and save to reload.
    </p>
    {/* <Info />
    <Hobbies /> */}
    <Button />
   </header>
  </div>
 );
}

export default App; // we can name it as we want when importing it

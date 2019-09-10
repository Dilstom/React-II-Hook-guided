import React, { useState } from 'react';
import Info, { Hobbies } from './info';
import Button from './Button';
import Modal from './Modal';

function App() {
 const [buttonColor, setButtonColor] = useState('maroon');
 const [modalOpen, setModalOpen] = useState(false);
 //  1st part without colors array
 //  const changeColor = () => {
 //   setButtonColor('blue');
 //  };

 // 2nd part with color array
 const changeColor = colorsArray => {
  // pick any random color
  setButtonColor(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
 };

 const handleModal = () => {
  setModalOpen(!modalOpen);
 };

 return (
  <div className="App">
   <header className="App-header">
    <p>
     Edit <code>src/App.js</code> and save to reload.
    </p>
    {/* <Info />
    <Hobbies /> */}
    <Button changeColorProp={changeColor} color={buttonColor} favNum={42} />
    {/* <Button color="maroon" favNum={42} /> */}
    {/* <Button color="maroon" favNum={{ favNumber: 42 }} /> */}
    {modalOpen ? <Modal handleModalProp={handleModal} /> : null}
    <button onClick={handleModal}>Open Modal</button>
   </header>
  </div>
 );
}

//Modal: modal component, toggle (control if modal is open/close), state (open/close)

export default App; // we can name it as we want when importing it

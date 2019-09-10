import React, { useState } from 'react';

export default function Button(props) {
 const [state, setState] = useState(false);
 const colors = [
  '#FFBAAA',
  '#27576B',
  '#D47F6A',
  '#AA7539',
  '#003D19',
  '#6E91A1',
  '#552D00',
 ];

 console.log('props: ', props);
 console.log('state: ', state);
 return (
  <button
   onClick={() => props.changeColorProp(colors)}
   style={{ backgroundColor: props.color }}
  >
   Click me!
  </button>
 );
}

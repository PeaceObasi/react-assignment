import React, { useState } from 'react';

//When creating a functional component in TypeScript we first need to use the type React. FC , which 
//is based on the FunctionComponent interface: React. FC makes sure the signature of our function is correct
// and the return value is valid JSX
const Geography: React.FC = () => {
  const QRCode = require('qrcode.react');//calls qr-code react and instantiates it

  //Syntax for state is const [state, setState] = useState(initialState);
  /*name is a data holder, setName is a function. useState is a hook (state manager) 
   (anytime we have a state that changes, we uses useState to set it up). that manages 
   our state for us that holds two variables.
   function that manipulates the data holder.
   name and setName would not exist without the state manager.*/
  const [inputLatitude, setInputLatitude] = useState('');
  const [inputAltitude, setInputAltitude] = useState('');
  const [inputLongitude, setInputLongitude] = useState('');
  //Empty bracket allows for input by user

  //when called, sets inputLongitude as the event/value that is inputed
  const changeinputLongitude = (event: any) => {
    setInputLongitude(event.target.value);
  }

  //when called, sets inputLatitude as the event/value that is inputed
  const changeinputLatitude = (event: any) => {
    setInputLatitude(event.target.value);
  }

  //when called, sets inputAltitude as the event/value that is inputed
  const changeinputAltitude = (event: any) => {
    setInputAltitude(event.target.value);
  }

  return (
    /** Creates a column and 
     * assigns padding of 6 to all sides
     * aligns item to the center
     * Justifies content to the center*/
    <div className="columns p-6 is-flex is-align-items-center is-justify-content-center">
      <div className="column is-flex is-align-items-center is-justify-content-center ">
        <div>
          {/**This code generates the QR code with the various values inputed in the longitude, latitude and altitude dataholders */}
          <QRCode value={`${inputLatitude}:${inputLongitude}:${inputAltitude}`} size={256} fgColor="darkcyan" />
        </div>
      </div>

      <div className="column is-centered">
        <div className="message-header has-background-primary-dark">
          <p>GEOGRAPHICAL LOCATION</p>
          <p></p>
        </div>
        <br>
        </br>
        <div className="field"> {/**Creates a field for Latitude input */}
          <label className="label has-text-white ">Latitude:</label>
          <div className="control">
            {/** This creates a box for input, assigns and shows whatever value the placeholder "inputLatitude" holds and as user inputs, changeinputLatidtude function is called */}
            <input className="input" type="text" placeholder="input latitude..." value={inputLatitude} onInput={changeinputLatitude} required />
          </div>
        </div>

        <div className="field"> {/**Creates a field for Altitude input */}
          <label className="label has-text-white ">Altitude:</label>
          <div className="control">
            {/** This creates a box for input, assigns and shows whatever value the placeholder "inputAltitude" holds and as user inputs, changeinputAltitude function is called */}
            <textarea className="input" placeholder="input altitude..." value={inputAltitude} onInput={changeinputAltitude} required></textarea>
          </div>
        </div>

        <div className="field" > {/**Creates a field for Longitude input */}
          <label className="label has-text-white">Longitude:</label>
          <div className="control">
            {/** This creates a box for input, assigns and shows whatever value the placeholder "inputLongitude" holds and as user inputs, changeinputLongitude function is called */}
            <textarea className="input" placeholder="input longitude..." value={inputLongitude} onInput={changeinputLongitude} required></textarea>
          </div>
        </div>
      </div>

    </div>









  )
}

export default Geography; {/**This code enables Geography function to be imported by another component or file e.g app.tsx */ }

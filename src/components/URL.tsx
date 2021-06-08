import React, { useState } from 'react';

//When creating a functional component in TypeScript we first need to use the type React. FC , which 
//is based on the FunctionComponent interface: React. FC makes sure the signature of our function is correct
// and the return value is valid JSX
const URL: React.FC = () => {
  const QRCode = require('qrcode.react'); //calls qr-code react and instantiates it

  //Syntax for state is const [state, setState] = useState(initialState);
    /*name is a data holder, setName is a function. useState is a hook (state manager) 
     (anytime we have a state that changes, we uses useState to set it up). that manages 
     our state for us that holds two variables.
     function that manipulates the data holder.
     name and setName would not exist without the state manager.*/
  const [inputUrl, setInputUrl] = useState('');
    //Empty bracket allows for input by user


  //when called, sets inputUrl as the event/value that is inputed
  const changeinputUrl = (event: any) => {
    setInputUrl(event.target.value);
  }

  return (
        /** Creates a column and 
         * aligns item to the center
         * Justifies content to the center*/
    <div className="columns is-flex is-align-items-center is-justify-content-center" >

      <div className="column p-6 is-flex is-align-items-center is-justify-content-center">

      {/**This code generates the QR code with the various values inputed in the inputUrl dataholders */}
        <QRCode value={`${inputUrl}`} size={256} fgColor="red" />

      </div>
      <div className="column p-6 ">
        <div className="is-fullwidth">
          <div className="message-header has-background-danger">
            <p>URL</p>
          </div>
          <br>
          </br>
          <div className="field " > {/**Creates a field for Url input */}
          <label className="label has-text-white">Url Link:</label>
            <div className="control ">
              {/** This creates a box for input, assigns and shows whatever value the placeholder "inputUrl" holds and as user inputs, changeinputUrl function is called */}
              <input className="input " type="text" placeholder="Link input..." value={inputUrl} onInput={changeinputUrl} />
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}


export default URL; {/**This code enables URL function to be imported by another compnent or file */}

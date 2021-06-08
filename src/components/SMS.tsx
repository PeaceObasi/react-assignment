import React, {  useState } from 'react';

//When creating a functional component in TypeScript we first need to use the type React. FC , which 
//is based on the FunctionComponent interface: React. FC makes sure the signature of our function is correct
// and the return value is valid JSX
const SMS: React.FC = () => {
    const QRCode = require('qrcode.react'); //calls qr-code react and instantiates it

    //Syntax for state is const [state, setState] = useState(initialState);
    /*name is a data holder, setName is a function. useState is a hook (state manager) 
     (anytime we have a state that changes, we uses useState to set it up). that manages 
     our state for us that holds two variables.
     function that manipulates the data holder.
     name and setName would not exist without the state manager.*/
    const [inputNumber, setInputNumber] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    //Empty bracket allows for input by user



    //when called sets inputNumber as the event/value that is inputed
    const changeinputNumber = (event: any) => {
        setInputNumber(event.target.value);
    }

    //when called sets inputMessage as the event/value that is inputed
    const changeinputMessage = (event: any) => {
        setInputMessage(event.target.value);
    }

    return (
        /** Creates a column and 
         * assigns padding of 6 to all sides
         * aligns item to the center
         * Justifies content to the center*/
        <div className="columns p-6 is-flex is-align-items-center is-justify-content-center" >
            
            <div className="column is-align-items-center">
            <div className="message-header has-background-link-dark">
          <p>SMS</p>
        </div>
        <br>
        </br>
                <div className="field"> {/**Creates a field for recipient input */}
                    <label className="label has-text-white">To:</label>
                    <div className="control">
                        {/** This creates a box for input, assigns and shows whatever value the placeholder "inputNumber" holds and as user inputs, changeinputNumber function is called */}
                        <input className="input" type="number" placeholder="Receiver..." value={inputNumber} onInput={changeinputNumber} required />
                    </div>
                </div>

                <div className="field"> {/**Creates a field for content input */}
                    <label className="label has-text-white">SMS Content:</label>
                    <div className="control">
                        {/** This creates an box for input, assigns and shows whatever value the placeholder "inputMessage" holds and as user inputs, changeinputMessage function is called */}
                        <textarea className="textarea" placeholder="SMS Content..." value={inputMessage} onInput={changeinputMessage} required></textarea>
                    </div>
                </div>
            </div>

            <div className="column is-flex is-align-items-center is-justify-content-center ">

                {/**This code generates the QR code with the various values inputed in the inputNumber and InputMessage dataholders */}

                <QRCode value={`SMS:${inputNumber}:${inputMessage}`} size={256} fgColor="darkblue" />
            </div>
        </div>


    )
}

export default SMS; {/**This code enables SMS function to be imported by another compnent or file */}

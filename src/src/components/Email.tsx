import React, { useState } from 'react';//Imports react and useState from react library

//When creating a functional component in TypeScript we first need to use the type React. FC , which 
//is based on the FunctionComponent interface: React. FC makes sure the signature of our function is correct
// and the return value is valid JSX
const Email: React.FC = () => {
    const QRCode = require('qrcode.react');//calls qr-code react and instantiates it


    //Syntax for state is const [state, setState] = useState(initialState);
    /*name is a data holder, setName is a function. useState is a hook (state manager) 
     (anytime we have a state that changes, we uses useState to set it up). that manages 
     our state for us that holds two variables.
     function that manipulates the data holder.
     name and setName would not exist without the state manager.*/
    const [inputEmail, setInputEmail] = useState('');
    const [inputBody, setInputBody] = useState('');
    const [inputSubject, setInputSubject] = useState('');
    //Empty bracket allows for input by user



    //when called, sets inputEmail as the event/value that it is called from
    const changeinputEmail = (event: any) => {
        setInputEmail(event.target.value);
    }

    //when called, sets inputBody as the event/value that it is called from
    const changeinputBody = (event: any) => {
        setInputBody(event.target.value);
    }

    //when called, sets inputSubject as the event/value that it is called from
    const changeinputSubject = (event: any) => {
        setInputSubject(event.target.value);
    }

    return (
        /** Creates a column and 
       * assigns padding of 6 to all sides
       * aligns item to the center
       * Justifies content to the center*/
        <div className="columns p-6 is-flex is-align-items-center is-justify-content-center">
            <div className="column is-centered">
                <div className="message-header has-background-primary">
                    <p>EMAIL</p>
                </div>
                <br>
                </br>
                <div className="field">{/**Creates a field for recipient input */}
                    <label className="label has-text-white">Mail To:</label>
                    <div className="control has-icons-left has-icons-right">
                        {/** This creates a box for input, assigns and shows whatever value the placeholder "inputEmail" holds and as user inputs, changeinputEmail function is called */}
                        <input className="input" type="text" placeholder="input email address..." value={inputEmail} onInput={changeinputEmail} />
                    </div>
                </div>

                <div className="field">{/**Creates a field for subject input */}
                    <label className="label has-text-white">Subject:</label>
                    <div className="control">
                        {/** This creates a box for input, assigns and shows whatever value the placeholder "inputSubject" holds and as user inputs, changeinputSubject function is called */}
                        <input className="input" type="text" placeholder="input subject..." value={inputSubject} onInput={changeinputSubject} />
                    </div>
                </div>

                <div className="field"> {/**Creates a field for body content input */}
                    <label className="label has-text-white">Body:</label>
                    <div className="control">
                        {/** This creates a box for input, assigns and shows whatever value the placeholder "inputBody" holds and as user inputs, changeinputBody function is called */}
                        <textarea className="textarea" placeholder="input body..." value={inputBody} onInput={changeinputBody}></textarea>
                    </div>
                </div>
            </div>
            <div className="column is-flex is-align-items-center is-justify-content-center">
                <div>
                    {/**This code generates the QR code with the various values inputed in the email, subject and body dataholders */}
                    <QRCode value={`mailto:${inputEmail}?subject=${inputSubject}&body=${inputBody}.`} size={256} fgColor="green" />
                </div>
            </div>


        </div>




    )
}

export default Email; {/**This code enables Email function to be imported by another compnent or file */ }



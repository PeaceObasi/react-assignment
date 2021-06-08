import React, { useState, useEffect } from 'react'; //Imports react, useState and useEffect hooks from react library


const Clock: React.FC = () => {
    //When creating a functional component in TypeScript we first need to use the type React. FC , which 
    //is based on the FunctionComponent interface: React. FC makes sure the signature of our function is correct
    // and the return value is valid JSX
    //const [state, setState] = useState(initialState);
    const [date, setDate] = useState(new Date()); //This function "new Date" gets the current date
    //function below responsible for setting new date value in state which will provoke a re-render of component.
    const tick = () => {
        setDate(new Date());
    }
    useEffect(() => {//sets timer is a subscription (part of when we need useEffect. CHeck component life cycle note - slide 98)
        const timerID = setInterval(tick, 1000); //set interval calls tick and ass
        //pass tick as callback function. Called every 1000ms (every 1 second) to set a new
        //Date() in state.
        /*now we need to let this useEffect know that there is work to do when component is to unmount. We indicate
        this work to do in a return statement that takes a function callback.*/

        return (
            /*When a component is about to die, it could just die and the clock we have created could just be ticking
              This could make the browser drag, as other things are running.
              So to stop the clock from running when the component closes we use clearInterval and assign the variable we created
              to pass the setInterval tick (which does not need a variable, the only reason we added the variable was 
              for us to end the processes using the variable*/
            () => {
                clearInterval(timerID); //cleanup the timer
            }
        )
    }, []);
    return (
        <div className="has-text-centered has-text-white">

            <h3> {/**on re-render, the current date and time is displayed */}
                <strong className="has-text-white">{`Today's date is ${date.toLocaleDateString('en-GB')}
                    and the time now is ${date.toLocaleTimeString('en-GB')}`}
                </strong>
            </h3>
        </div>
    )
}

export default Clock; {/**This code enables Clock function to be imported by another component or file */ }
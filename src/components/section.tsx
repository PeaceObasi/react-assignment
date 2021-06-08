// Generation of QR Code in React Native
// https://aboutreact.com/generation-of-qr-code-in-react-native/

// import React in our code
import React, { useEffect, useState } from 'react'; //Imports react and useState from react library
import qr from '../qr.png' //imports qr image 


type Props = {
  name?: string;
}

const Name: React.FC<Props> = (props) => {
  const [name, setName] = useState(props.name);

  const changeNameToGreet = (event: any) => {
    setName(event.target.value);
  }

  useEffect(() => {//Use it for changing state. A call to useEffect.
    // = useEffect () //seeing any function with an empty bracket is a call to the function
    //Everytime the html is refreshed, this refreshes
    document.title = "React QRCode"
  }
  )


  return (
    <div>
      <div className="columns qr is-flex is-justify-content-center is-align-items-center">
        <div className="column has-text-centered ">
          <img src={qr} alt="hand" />
        </div>


        <div className="column">
          <section className="section is-medium">


            <h1 className="title has-text-white is-size-1">WELCOME {name}!</h1>
            <br />
            <h3 className="subtitle has-text-white">
              This is my <strong className="has-text-white">QR-CODE SCANNER</strong> website. Take a little journey and try out these
          various qr-code scanners. You will find a scanner for SMS, URL, Email and Geographical Locations.
          </h3>
            <br />
            <h1 className="has-text-white">HAVE FUN!</h1>
            <br />
            <p>
              {/** This creates a box for input, assigns and shows whatever value the placeholder "name" holds and as user inputs, changeNameToGreet function is called */}
              <input className="input" type="text" placeholder="Write your name here..."
                name="name_to_greet" value={name} onInput={changeNameToGreet} />
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

Name.defaultProps = {//once we've defined a variable, in this case Name, react includes a .defaultProps 
  //because we have already assigned a variable (in this case "name".) So it is saying, if it is not the value we
  //have assigned then assign this.
  name: "USER"
}
export default Name; {/**This code enables Name function to be imported by another compnent or file */ }
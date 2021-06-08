import React from 'react';

const NavBar: React.FC = () => {
    //When creating a functional component in TypeScript we first need to use the type React. FC , which 
    //is based on the FunctionComponent interface: React. FC makes sure the signature of our function is correct
    // and the return value is valid JSX

    return (
        <div>
            {/**Creates a navigation bar */}
            <nav className="navbar pt-4 pb-3 pl-6 pr-6" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <h1 className="title is-align-items-center is-justify-content-center">QRCode Generator by: Peace Obasi-Kalu</h1>

                </div>
            </nav>


        </div>
    )
}
export default NavBar; {/**This code enables NavBar function to be imported by another compnent or file */ }
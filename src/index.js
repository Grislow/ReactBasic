// Import the React and ReactDOM
//  -using ES6 modules
import React from 'react';
import ReactDOM from 'react-dom';

// defining a function to be used within the functional component
function getButtonText() {
    // return { text: 'Click me'}   -> cannot parse js objects as text implicitly
    return 'Click me!';
}

// Create a react component
//  -this is a functional component
const App = () => {

    const labelText = 'Enter name:';

    return (
    <div>
        {/* 'for' property needed to be renamed to 'htmlFor', check in console to register these types of errors */}
        <label  htmlFor="name" className="label">{labelText}</label>
        <input type="text" id="name"/>
        {/* 
            -Styles must be passed as an object
            -replace normal css properties with jsx compatible ones by removing dashes and using camelCase notation
         */}
        <button style={{color: 'white', backgroundColor: 'blue'}}>
        {/* To reference js variables and function wrap code in curly braces */}
            {getButtonText()}
        </button>
    </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    // Earlier created react components
    <App />,
    // Dom element within which this component will be rendered
    document.querySelector('#root')
);

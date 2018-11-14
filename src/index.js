import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

/*
    1. Is a js class
    2. extends React.Component
        -comes with a ton of built in functionality
    3. has render() method that returns jsx
*/
class App extends React.Component {
    constructor(props) {
        //ensures that the React.Component constructor is called
        super(props);
        
        // 1 approach of state initialization - in constructor
        // initialization is the only situation where we assign value directly
        this.state = {
            // make sure to default state value(null for numerical, empty string for string)
            lat: null,
            errorMessage: ''
        };
    }

    //2 approach of state initialization - in class body
    // SAME AS INITIALIZING IN CONSTRUCTOR BUT ALLOWS OMISSION OF CONSTRUCTOR
    // state = { lat: null, errorMessage: ''};

    // example of lifecycle method
    // componentDidMount() - is called when component gets rendered to DOM for the first time
    componentDidMount() {
        console.log('Component rendered to screen');
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // example of setting the state
                // setState is inherited from React.Component     
                this.setState({ lat: position.coords.latitude});
            },
            err =>  {
                // this way whenever an error occurs the component is rerendered
                this.setState({ errorMessage: err.message });
            }
        );
    }
    // componentDidUpdate() - is called after component is updated and rerendered
    componentDidUpdate() {
        console.log('Component was updated');
    }

    // Helper functions isolates conditional rendering
    // Thx to this the render function only includes what common across all situations
    renderContent() {
        // example of conditional rendering
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div>;
        } else if(this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat}/>;
        } else {
            return <Loader text="Please accept location request"/>;
        }
    }

    // minimize ammount of logic in the render method - it gets called a lot, should be succinct
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
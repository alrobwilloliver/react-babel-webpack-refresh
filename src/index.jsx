import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = (props) => {
//     return <div>Hello, {props.name}</div>
// }

// Creating class instantiating an instance of the component
class Hello extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

    }

    // Creating an instance method to enable the state of the component (clicked) to be changed on click
    click = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        // build and return html for component
        return (
            <div onClick={this.click} className={this.state.clicked ? 'clicked' : null}>Hello {this.props.name}</div>
        )
    }
}

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(<Hello name='Alan' />, root)
}

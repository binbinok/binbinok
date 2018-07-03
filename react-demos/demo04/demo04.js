import React from 'react';
import ReactDOM from 'react-dom';

// var HelloMessage = <div>Hello, jony</div>

class HelloMessage extends React.Component{
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

console.log(HelloMessage)

ReactDOM.render(
    <HelloMessage name="jony" />,
    document.getElementById('app')
)
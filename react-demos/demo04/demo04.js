import React from 'react';
import {render} from 'react-dom';

var input = React.createElement('input');

console.log(input);

// var HelloMessage = React.createElement({
//     render: () => {
//         return <div>Hello, {this.props.name}</div>;
//     }
// })

// render(
//     <HelloMessage name="john" />,
//     document.getElementById('app')
// )
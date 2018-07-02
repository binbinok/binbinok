import React from 'react';
import {render} from 'react-dom';

var arr = [
    <h1 key="1">Hello world!</h1>,
    <h2 key="2">React is awesome</h2>,
];

render(
    <div>
        {arr}
    </div>,
    document.getElementById('app')
)

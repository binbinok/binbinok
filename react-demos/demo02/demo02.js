import React from 'react';
import { render } from 'react-dom';

var names = ['Alice', 'Emily', 'Kate'];

render(
    <div>
        {
            names.map((name, index) => <div key={index}>Hello, {name}</div>)
        }
    </div>,
    document.getElementById('app')
)
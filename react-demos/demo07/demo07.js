import React from 'react';
import {render} from 'react-dom';

class MyComponent extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.refs.myTextInput.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref="myTextInput"/>
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        )
    }
}

render(
    <MyComponent />,
    document.getElementById('app')
)
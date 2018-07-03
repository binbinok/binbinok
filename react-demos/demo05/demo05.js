import React from 'react';
import {render} from 'react-dom';

class NotesList extends React.Component {
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, child => <li>{child}</li>)
                }
            </ol>
        )
    }
}

render(
    <NotesList>
        <span>list1</span>
        <span>list2</span>
        <span>list3</span>
        <span>list4</span>
        <span>list5</span>
        <span>list6</span>
    </NotesList>,
    document.getElementById('app')
)
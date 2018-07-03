import React from 'react';
import {render} from 'react-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {opacity: 1.0}

    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({opacity});
        }, 100)
    }

    render() {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        )
    }
}

render(
    <Hello name="react" />,
    document.getElementById('app')
)
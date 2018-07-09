import React from "react";
import { render } from "react-dom";

class LoginInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isLoggedIn: false}
    }

    loginToggle() {
        this.setState({isLoggedIn: !this.state.isLoggedIn})
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <button onClick={this.loginToggle.bind(this)}>{isLoggedIn ? 'hide' : 'show'}</button>
                {
                    isLoggedIn ? <h1>show box</h1> : null
                }
            </div>
        );
    }
}

render(
    <LoginInfo />,
    document.getElementById('app')
)
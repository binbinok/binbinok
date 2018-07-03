import React from 'react';
import {render} from 'react-dom';
import Axios from 'axios';

class UserGist extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            lastGistUrl: ''
        }
    }

    componentDidMount() {
        Axios.get(this.props.source).then(res => {
            var lastGist = res.data[0];
            console.log('res', lastGist.owner.login, lastGist.html_url)
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }).catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                {this.state.username}'s last gist is <a href={this.state.lastGistUrl} target="_blank">here</a>.
            </div>
        )
    }
}

render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('app')
)
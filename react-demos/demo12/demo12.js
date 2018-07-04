import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

class RepoList extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            loading: true,
            error: null,
            data: null
        }
    }

    componentDidMount() {
        this.props.promise.then(data => this.setState({loading: false, data})).catch(error => this.setState({loading: false, error}))
    }

    render() {
        let state = this.state,
            loading = state.loading,
            data = state.data,
            error = state.error;
        if (loading) {
            return <span>Loading...</span>;
        } else if (error !== null) {
            return <span>Error: {error.message}</span>;
        } else {
            var repos = data.data.items;
            console.log(repos);
            var repoList = repos.map((repo, index) => <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br /> {repo.description}</li>);

            return (
                <main>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol>{repoList}</ol>
                </main>
            );
        }
    }
}

render(
    <RepoList promise={axios.get('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
    document.getElementById('app')
)

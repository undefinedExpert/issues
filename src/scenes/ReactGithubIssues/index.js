import React, { Component } from 'react';
import { githubReactIssues } from 'services/githubService'
import Issue from "./scenes/Issue";
import shortId from 'shortid'

class ReactGithubIssuesList extends Component {
  state = {
    issues: [],
    isLoaded: false,
  }
  componentDidMount() {
    githubReactIssues()
      .then(issues => this.setState({issues, isLoaded: true}))
  }


  render() {
    const { isLoaded, issues } = this.state
    return (
      <div style={{padding: '20px 20px'}}>
        <h1>30 issues from React repository from last 7 days</h1>
        { isLoaded ? issues.map((issue) => <Issue key={shortId()} {...issue} />) : 'Loading...'}
      </div>
    );
  }
}

export default ReactGithubIssuesList;
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Description from './scenes/Description'

class Issue extends Component {

  render() {
    const { description, link, login, title } = this.props
    return (
      <div style={{padding: '16px 0'}}>
        <p><b>{login}</b> posted an issue called <b>{title}</b></p>
        <Description markdown={description} />
      </div>
    );
  }
}

Issue.propTypes = {
  login: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
}

export default Issue;
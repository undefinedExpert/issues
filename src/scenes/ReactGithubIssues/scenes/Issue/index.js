import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Description from './scenes/Description'

class Issue extends Component {
  render() {
    const { description, login, title, date } = this.props
    const formatedDate = new Date(date).toLocaleDateString()
    return (
      <div style={{padding: '16px 0'}}>
        <p><b>{login}</b> posted an issue called <b>{title}</b> posted on {formatedDate}</p>
        <Description markdown={description} />
      </div>
    );
  }
}

Issue.propTypes = {
  login: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
}

export default Issue;
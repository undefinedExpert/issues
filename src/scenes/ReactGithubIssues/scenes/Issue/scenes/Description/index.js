import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ParsedMarkdownParagraph from './scenes/ParsedMarkdownParagraph'

class Description extends Component {
  state = {
    isEnabled: false
  }

  handleShowDescription = () => {
    this.setState(({isEnabled}) => ({isEnabled: !isEnabled}))
  }

  render() {
    const { markdown } = this.props
    const { isEnabled } = this.state
    const btnText = isEnabled ? 'Hide description' : 'Show description'
    return (
      <div>
        Description: <button onClick={this.handleShowDescription}>{btnText}</button>
        {isEnabled && <ParsedMarkdownParagraph markdown={markdown} />}
      </div>
    );
  }
}

Description.propTypes = {
  markdown: PropTypes.string,
}

export default Description;
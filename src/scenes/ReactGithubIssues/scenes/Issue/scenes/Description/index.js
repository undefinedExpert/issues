import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ParsedMarkdownParagraph from './scenes/ParsedMarkdownParagraph'
import Button from 'components/Button'

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
        Description: <Button onClick={this.handleShowDescription}>{btnText}</Button>
        {isEnabled && <ParsedMarkdownParagraph markdown={markdown} />}
      </div>
    );
  }
}

Description.propTypes = {
  markdown: PropTypes.string,
}

export default Description;
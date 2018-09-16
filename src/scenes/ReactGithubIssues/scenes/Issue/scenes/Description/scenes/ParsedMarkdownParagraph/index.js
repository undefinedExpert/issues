import React, { PureComponent } from 'react';
import { markdown } from 'markdown'
import PropTypes from 'prop-types'

class ParsedMarkdownParagraph extends PureComponent {
  state = {
    parsedText: null,
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (!state.parsedText) {
      const parsedText = markdown.toHTML( nextProps.markdown );
      return {
        parsedText
      }
    }
  }


  render() {
    const { parsedText } = this.state
    return (
      <p dangerouslySetInnerHTML={{__html: parsedText}} />
    );
  }
}

ParsedMarkdownParagraph.propTypes = {
  markdown: PropTypes.string
}

export default ParsedMarkdownParagraph;
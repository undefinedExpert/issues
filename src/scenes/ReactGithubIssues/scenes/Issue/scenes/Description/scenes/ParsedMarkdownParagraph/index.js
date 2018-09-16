import React, { PureComponent } from 'react';
import { markdown } from 'markdown'
import PropTypes from 'prop-types'
import Paragraph from 'components/Paragraph'

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
      <Paragraph dangerouslySetInnerHTML={{__html: parsedText}} />
    );
  }
}

ParsedMarkdownParagraph.propTypes = {
  markdown: PropTypes.string
}

export default ParsedMarkdownParagraph;
import React, { PureComponent } from 'react';
import { markdown } from 'markdown'
import PropTypes from 'prop-types'

class Paragraph extends PureComponent {
  render() {
    return (
      <p {...this.props} />
    );
  }
}

Paragraph.propTypes = {
  children: PropTypes.node
}

export default Paragraph;
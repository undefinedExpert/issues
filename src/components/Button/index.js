import React, { PureComponent } from 'react';
import { markdown } from 'markdown'
import PropTypes from 'prop-types'

class Button extends PureComponent {
  render() {
    return (
      <button {...this.props} />
    );
  }
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button;
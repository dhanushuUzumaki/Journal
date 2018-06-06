import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    return <div id="hello">{this.props.hello}</div>;
  }
}
Hello.propTypes = {
  hello: PropTypes.string
};

Hello.displayName = 'Hello';

export default Hello;

import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, label } = this.props;
    return (
      <div className="group">
        <input type="text" name={name} required="true" />
        <span className="highlight" />
        <span className="bar" />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

Input.displayName = 'Input';

export default Input;

import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onKeyPress = e => this._onKeyPress(e);
  }

  _onKeyPress(e) {
    let { value } = e.target;
    if (e.key === 'Enter') {
      this.props.onBlur(value);
      value = '';
    }
    this.setState({
      value
    });
  }

  render() {
    const { name, label } = this.props;
    return (
      <div className="group">
        <input
          type="text"
          name={name}
          required="true"
          onKeyPress={this.onKeyPress}
          value={this.state.value}
        />
        <span className="highlight" />
        <span className="bar" />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func
};

Input.displayName = 'Input';

export default Input;

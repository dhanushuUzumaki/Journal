import React from 'react';
import PropTypes from 'prop-types';

const extractStateFromProps = ({ value }) => ({ value });

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = extractStateFromProps(props);
    this.onChange = e => this._onChange(e);
    this.handleEnter = e => this._handleEnter(e);
    this.handleBlur = () => this._handleBlur();
    this.resetValue = () => this._resetValue();
    this.input = React.createRef();
  }

  _resetValue() {
    this.setState(
      state => ({ ...state, value: '' }),
      () => this.input.current.blur()
    );
  }

  _handleBlur() {
    const { onBlur, resetOnBlur } = this.props;
    if (typeof onBlur === 'function') {
      onBlur(this.state.value);
      if (resetOnBlur) {
        this.resetValue();
      }
    }
  }

  _handleEnter(e) {
    const { handleEnter, resetOnEnter } = this.props;
    if (typeof handleEnter === 'function' && e.charCode === 13) {
      handleEnter(this.state.value);
      if (resetOnEnter) {
        this.resetValue();
      }
    }
  }

  _onChange(e) {
    const { value } = e.target;
    this.setState(state => ({ ...state, value }));
  }

  render() {
    const { name, label } = this.props;
    return (
      <div className="input-container">
        <input
          type="text"
          name={name}
          required="true"
          onChange={this.onChange}
          value={this.state.value}
          onKeyPress={this.handleEnter}
          onBlur={this.handleBlur}
          ref={this.input}
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
  handleEnter: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  resetOnEnter: PropTypes.bool,
  resetOnBlur: PropTypes.bool
};

Input.defaultProps = {
  value: '',
  resetOnBlur: false,
  resetOnEnter: false
};

Input.displayName = 'Input';

export default Input;

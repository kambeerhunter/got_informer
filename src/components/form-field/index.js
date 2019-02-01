import React from 'react';
import { PropTypes } from 'prop-types';

const FormField = ({
  input,
  label,
  type,
  meta : {
    touched,
    error,
    warning,
  }
}) => (
  <div className="form-group">
    <input
      {...input}
      placeholder={label}
      type={type}
      value={input.value}
      className="form-control"
    />
    {touched && (
      <div>
        {error && (
          <React.Fragment>
            <i className="fas fa-exclamation-triangle text-danger"></i>
            &nbsp;
            <span>{error}</span>
          </React.Fragment>
        )}
      </div>
    )}
  </div>
)

FormField.propTypes = {
  input: PropTypes.shape({}),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  })
}

FormField.defaultProps = {
  input: null,
  meta: {
    touched: false,
    error: '',
    warning: '',
  }
}

export default FormField;

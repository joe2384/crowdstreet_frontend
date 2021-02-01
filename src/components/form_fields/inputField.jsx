import React, { Fragment } from 'react';
import './field.css';

function InputField({
  setState,
  type,
  name,
  label,
  value,
  required,
  pattern,
  minLength,
  maxLength,
}) {
  return (
    <Fragment>
      <label>{label}</label>
      <br />
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        onChange={(e) =>
          setState((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </Fragment>
  );
}

export default InputField;

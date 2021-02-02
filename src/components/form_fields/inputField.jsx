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
  minLength = null,
  maxLength = null,
  password = null,
  message = null,
  error,
}) {
  const regexHandler = (e) => {
    return e.target.value.match(pattern) === null;
  };

  const passwordHandler = (e) => {
    return e.target.value !== password;
  };

  const onChangeHandler = (e) => {
    let boolean = null;
    if (name !== 'password_check') boolean = regexHandler(e);
    if (name === 'password_check') boolean = passwordHandler(e);
    setState((previousState) => ({
      ...previousState,
      [e.target.name]: { value: e.target.value, error: boolean },
    }));
  };

  return (
    <Fragment>
      <label>{label}</label>
      <br />
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      {error && required && <span style={{ color: 'red' }}>{message}</span>}
    </Fragment>
  );
}

export default InputField;

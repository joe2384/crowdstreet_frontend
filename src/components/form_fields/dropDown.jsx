import React, { Fragment } from 'react';

function DropDown({
  setState,
  name,
  label,
  value,
  required,
  uniqueValues,
  error,
  message,
}) {
  const Style = {
    select: {
      width: ' 100px',
      margin: '0 15px',
    },
  };
  return (
    <Fragment>
      {label}
      <br />
      <select
        style={Style.select}
        name={name}
        value={value}
        required={required}
        onChange={(e) =>
          setState((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
          }))
        }>
        <option value="all">All</option>
        {uniqueValues.map((state, idx) => (
          <option key={idx} value={state} placeholder={value}>
            {state}
          </option>
        ))}
      </select>
      {error && required && <span style={{ color: 'red' }}>{message}</span>}
    </Fragment>
  );
}

export default DropDown;

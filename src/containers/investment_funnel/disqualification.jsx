import React, { Fragment } from 'react';

function Disqualification({ message }) {
  return (
    <Fragment>
      <div style={{ color: 'red', fontSize: '20px' }}>{message}</div>
      <br />
      <div>
        Please call <a href="tel:5555555555">(555) 555-5555</a> for assistance
      </div>
    </Fragment>
  );
}

export default Disqualification;

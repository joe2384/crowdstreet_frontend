import React, { Fragment, useState } from 'react';
import InputField from '../../components/form_fields/inputField';

function NewAccount({ resetAction }) {
  const [state, setState] = useState({
    email: {
      value: '',
      error: false,
    },
    password: {
      value: '',
      error: false,
    },
    password_check: {
      value: '',
      error: false,
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    resetAction();
  };

  const disableErrorCheck = Object.entries({ ...state }).filter(
    ([key, val]) => (val.error === true) | (val.value.length <= 0)
  );

  return (
    <Fragment>
      <form onSubmit={(e) => submitHandler(e)}>
        <InputField
          setState={setState}
          type={'email'}
          name={'email'}
          label={'Email Address'}
          value={state['email'].value}
          required={true}
          pattern={
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }
          message={'Please format email email@email.com'}
          error={state['email'].error}
        />
        <br />
        <br />
        <InputField
          setState={setState}
          type={'password'}
          name={'password'}
          label={
            'Password must contain one uppercase and a special char @#$%^&*()'
          }
          value={state['password'].value}
          required={true}
          pattern={
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
          }
          message={'Please enter valid password'}
          error={state['password'].error}
        />
        <br />
        <br />
        <InputField
          setState={setState}
          type={'password'}
          name={'password_check'}
          label={'Password check'}
          value={state['password_check'].value}
          required={true}
          pattern={
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
          }
          password={state['password'].value}
          message={'Please enter matching password'}
          error={state['password_check'].error}
        />
        <br />
        <br />
        <input type="submit" disabled={disableErrorCheck.length > 0} />
      </form>
    </Fragment>
  );
}

export default NewAccount;

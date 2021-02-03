import React, { Fragment, useState } from 'react';
import InputField from '../../components/form_fields/inputField';
import DropDown from '../../components/form_fields/dropDown';

function LandingPage({ funnelAction, message }) {
  const [state, setState] = useState({
    investment: {
      value: 0,
      error: false,
    },
    investment_type: {
      value: 'bond',
      error: false,
    },
    net_worth: {
      value: 0,
      error: false,
    },
    income: {
      value: 0,
      error: false,
    },
    credit_score: {
      value: 0,
      error: false,
    },
  });

  const submitHandler = (e) => {
    const newState = { ...state };
    const stateObject = {
      investment: newState['investment'].value,
      investment_type: newState['investment_type'].value,
      net_worth: newState['net_worth'].value,
      income: newState['income'].value,
      credit_score: newState['credit_score'].value,
    };
    e.preventDefault();
    funnelAction(stateObject);
  };

  const disableErrorCheck = Object.entries({ ...state }).filter(
    ([key, val]) => val.value <= 0
  );

  return (
    <Fragment>
      {message && (
        <div style={{ color: 'red', fontSize: '20px' }}>{message}</div>
      )}
      <form onSubmit={(e) => submitHandler(e)}>
        <InputField
          setState={setState}
          type={'number'}
          name={'investment'}
          label={'Investment Amount'}
          value={state['investment'].value}
          required={true}
          pattern={'^[0-9]*$'}
          minLength={1}
          maxLength={20}
          message={'Please enter a valid investment amount'}
          error={state['investment'].error}
        />
        <br />
        <br />
        <DropDown
          setState={setState}
          name={'investment_type'}
          label={'Investment type'}
          value={state['investment_type'].value}
          required={true}
          uniqueValues={['Bond', 'Stocks', 'Real Estate']}
          message={'Please enter a valid investment type'}
          error={state['investment_type'].error}
        />
        <br />
        <br />
        <InputField
          setState={setState}
          type={'number'}
          name={'net_worth'}
          label={'Net Worth'}
          value={state['net_worth'].value}
          required={true}
          pattern={'^[0-9]*$'}
          minLength={1}
          maxLength={20}
          message={'Please enter a valid net worth'}
          error={state['net_worth'].error}
        />
        <br />
        <br />
        <InputField
          setState={setState}
          type={'number'}
          name={'income'}
          label={'Yearly income'}
          value={state['income'].value}
          required={true}
          pattern={'^[0-9]*$'}
          minLength={1}
          maxLength={20}
          message={'Please enter a valid income'}
          error={state['income'].error}
        />
        <br />
        <br />
        <InputField
          setState={setState}
          type={'number'}
          name={'credit_score'}
          label={'Credit score'}
          value={state['credit_score'].value}
          required={true}
          pattern={'^[0-9]*$'}
          minLength={1}
          maxLength={4}
          message={'Please enter a valid credit score'}
          error={state['credit_score'].error}
        />
        <br />
        <br />
        <input type="submit" disabled={disableErrorCheck.length > 0} />
      </form>
    </Fragment>
  );
}

export default LandingPage;

import React, { Fragment, useState } from 'react';
import InputField from '../../components/form_fields/inputField';
import DropDown from '../../components/form_fields/dropDown';

function LandingPage({ funnelAction }) {
  const [state, setState] = useState({
    investment: 0,
    investment_type: '',
    net_worth: 0,
    income: 0,
    credit_score: 0,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    funnelAction(state);
  };

  const disabled =
    state.investment > 0 &&
    state.investment_type.length > 0 &&
    state.net_worth > 0 &&
    state.income > 0 &&
    state.credit_score > 0;

  return (
    <Fragment>
      <form onSubmit={(e) => submitHandler(e)}>
        <InputField
          setState={setState}
          type={'number'}
          name={'investment'}
          label={'Investment Amount'}
          value={state['investment']}
          required={true}
          pattern={'^[0-9]*$'}
          minLength={1}
          maxLength={20}
        />
        <br />
        <br />
        <DropDown
          setState={setState}
          name={'investment_type'}
          label={'Investment yype'}
          value={state['investment_type']}
          required={true}
          uniqueValues={['Bond', 'Stocks', 'Real Estate']}
        />
        <br />
        <br />
        <InputField
          setState={setState}
          type={'number'}
          name={'net_worth'}
          label={'Net Worth'}
          value={state['net_worth']}
          required={true}
          pattern={'^[0-9]*$'}
          minLength={1}
          maxLength={20}
        />
        <br />
        <br />
        <InputField
          setState={setState}
          type={'number'}
          name={'income'}
          label={'Yearly income'}
          value={state['income']}
          required={true}
          pattern={'^[0-9]*$'}
          minLength={1}
          maxLength={20}
        />
        <br />
        <br />
        <InputField
          setState={setState}
          type={'number'}
          name={'credit_score'}
          label={'Credit score'}
          value={state['credit_score']}
          required={true}
          pattern={'^[0-9]*$'}
          minLength={1}
          maxLength={20}
        />
        <br />
        <br />
        <input type="submit" disabled={!disabled} />
      </form>
    </Fragment>
  );
}

export default LandingPage;

import React, { Fragment } from 'react';
import HocApiComponent from '../hocApiComponent';
import Disqualification from './disqualification';
import LandingPage from './landingPage';
import NewAccount from './newAccount';

const Funnel = ({ data, funnelAction, resetAction, loading, message }) => {
  return (
    <Fragment>
      {loading ? (
        <div>...Loading</div>
      ) : data === '' ? (
        <LandingPage funnelAction={funnelAction} message={message} />
      ) : data ===
        "We are sorry but you don't meet the requirements to invest" ? (
        <Disqualification message={data} />
      ) : (
        <NewAccount resetAction={resetAction} />
      )}
    </Fragment>
  );
};

export default HocApiComponent(Funnel);

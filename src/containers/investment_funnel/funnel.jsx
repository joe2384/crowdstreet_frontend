import React, { Fragment } from 'react';
import HocApiComponent from '../hocApiComponent';
import Disqualification from './disqualification';
import LandingPage from './landingPage';
import NewAccount from './newAccount';

const Funnel = ({ data, funnelAction, resetAction, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <div>...Loading</div>
      ) : data === '' ? (
        <LandingPage funnelAction={funnelAction} />
      ) : data === 'disqualification' ? (
        <Disqualification />
      ) : (
        <NewAccount resetAction={resetAction} />
      )}
    </Fragment>
  );
};

export default HocApiComponent(Funnel);

import React, { Fragment, useState } from 'react';
import HocApiComponent from '../hocApiComponent';
import Disqualification from './disqualification';
import LandingPage from './landingPage';
import NewAccount from './newAccount';

const Funnel = ({ data, funnelAction }) => {
  return (
    <Fragment>
      {data === '' ? (
        <LandingPage funnelAction={funnelAction} />
      ) : data === 'disqualification' ? (
        <Disqualification />
      ) : (
        <NewAccount />
      )}
    </Fragment>
  );
};

export default HocApiComponent(Funnel);

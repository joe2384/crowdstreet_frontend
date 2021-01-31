import React, { Fragment, useState } from 'react';
import HocApiComponent from '../hocApiComponent';

const Funnel = ({ data, funnelAction }) => {
  console.log('Log = ', funnelAction);
  return <Fragment>Test</Fragment>;
};

export default HocApiComponent(Funnel);

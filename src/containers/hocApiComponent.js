import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { funnelAction } from '../store/actions/action';

const mapStateToProps = (state) => {
  const { data } = state.dataReducers;
  return {
    data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      funnelAction: funnelAction,
    },
    dispatch
  );

const UpdatedComponent = (HocApiComponent) => {
  const NewComponent = ({ ...Props }) => {
    return <HocApiComponent {...Props} />;
  };
  return NewComponent;
};

const composeWrapper = compose(
  connect(mapStateToProps, mapDispatchToProps),
  UpdatedComponent
);

export default composeWrapper;

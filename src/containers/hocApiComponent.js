import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { funnelAction, resetAction } from '../store/actions/action';

const mapStateToProps = (state) => {
  const { data, message, loading } = state.dataReducers;
  return {
    data,
    loading,
    message,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      funnelAction: funnelAction,
      resetAction: resetAction,
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

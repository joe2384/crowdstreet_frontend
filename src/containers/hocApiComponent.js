import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { funnelAction } from '../store/actions/action';

const mapStateToProps = (state) => {
  const { data, loading } = state.dataReducers;
  return {
    data,
    loading,
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

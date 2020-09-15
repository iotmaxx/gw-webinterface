/**
 *
 * StatusSystemInfo
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import StatusOverview from 'components/StatusOverview';

import injectReducer from 'utils/injectReducer';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import SystemInfoReducer from './reducers';
import saga from './saga';

import { getSystemInfo } from './actions';

export function StatusSystemInfo({ doGetSystemInfo, statusSystemInfo }) {
  useEffect(() => {
    doGetSystemInfo();
  }, []);

  return <StatusOverview caption="System Info" values={statusSystemInfo} />;
}

StatusSystemInfo.propTypes = {
  doGetSystemInfo: PropTypes.func,
  statusSystemInfo: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    doGetSystemInfo: () => {
      dispatch(getSystemInfo());
    },
  };
}

function mapStateToProps(state) {
  return {
    statusSystemInfo: state.StatusSystemInfo.systemInfo,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'StatusSystemInfo',
  reducer: SystemInfoReducer,
});
const withSaga = injectSaga({ key: 'StatusSystemInfo', saga, mode: DAEMON });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StatusSystemInfo);

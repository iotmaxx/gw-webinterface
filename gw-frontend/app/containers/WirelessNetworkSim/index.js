/**
 *
 * WirelessNetworkSim
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';

import WirelessNetworkSimConfigForm from 'components/WirelessNetworkSimConfigForm';
import PukForm from 'components/PukForm';

import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import saga from './saga';
import { setModem } from './actions';

// TODO: Remove needPuk Mockup
export function WirelessNetworkSim({ doSetModem }) {
  const [simEnabled, setSimEnabled] = useState(true);

  const toggleCheckbox = event => {
    setSimEnabled(event.target.checked);
  };

  const clickHandler = () => {
    setSimEnabled(true);
  };

  const submit = values => {
    console.log(values);
    doSetModem(values.apn, values.pin, values.username, values.password);
    ToastsStore.success('Success, your changes have been submitted!');
  };

  return (
    <div>
      {simEnabled ? (
        <WirelessNetworkSimConfigForm submit={submit} formTitle="SIM" />
      ) : (
        <PukForm clickHandler={clickHandler} />
      )}
      <br />
      <label htmlFor="simEnabled">SIM card enabled?</label>
      <input
        name="simEnabled"
        checked={simEnabled}
        onChange={event => toggleCheckbox(event)}
        type="checkbox"
      />
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.BOTTOM_RIGHT}
      />
    </div>
  );
}

WirelessNetworkSim.propTypes = {
  doSetModem: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    doSetModem: (apn, pin, username, password) => {
      dispatch(setModem(apn, pin, username, password));
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'LocalNetworkIpConfig',
  saga,
  mode: DAEMON,
});

export default compose(
  withSaga,
  withConnect,
)(WirelessNetworkSim);

/**
 *
 * WirelessNetworkSim
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import WirelessNetworkSimConfigForm from 'components/WirelessNetworkSimConfigForm';
import PukForm from 'components/PukForm';

import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

// TODO: Remove needPuk Mockup
export function WirelessNetworkSim() {
  const [simEnabled, setSimEnabled] = useState(true);

  const toggleCheckbox = event => {
    setSimEnabled(event.target.checked);
  };

  const clickHandler = () => {
    setSimEnabled(true);
  };

  const submit = values => {
    console.log(values);
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
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(WirelessNetworkSim);

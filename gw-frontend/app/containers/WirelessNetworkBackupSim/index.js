/**
 *
 * WirelessNetworkBackupSim
 *
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import WirelessNetworkSimConfigForm from 'components/WirelessNetworkSimConfigForm';
import PukForm from 'components/PukForm';

export function WirelessNetworkBackupSim() {
  const [simEnabled, setSimEnabled] = useState(true);

  const toggleCheckbox = event => {
    setSimEnabled(event.target.checked);
  }

  const clickHandler = () => {
    setSimEnabled(true);
  }

  return (
    <div>
      {
        simEnabled ? <WirelessNetworkSimConfigForm /> : <PukForm clickHandler={clickHandler}/>
      }
      <br/>
      <label htmlFor="simEnabled">SIM card enabled?</label>
      <input name="simEnabled" checked={simEnabled} onChange={(event) => toggleCheckbox(event)} type="checkbox" />
    </div>
  );
}

WirelessNetworkBackupSim.propTypes = {
  dispatch: PropTypes.func.isRequired,
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

export default compose(withConnect)(WirelessNetworkBackupSim);

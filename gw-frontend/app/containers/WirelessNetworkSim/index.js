/**
 *
 * WirelessNetworkSim
 *
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import WirelessNetworkSimConfigForm from 'components/WirelessNetworkSimConfigForm';

// TODO: Remove needPuk Mockup
export function WirelessNetworkSim() {
  const [simEnabled, setSimEnabled] = useState(true);
  
  const toggleCheckbox = event => {
    setSimEnabled(event.target.checked);
  }

  const clickHandler = () => {
    setSimEnabled(true);
  }

  return (
    <div>
      {simEnabled ? (
        <WirelessNetworkSimConfigForm />
      ) : (
        <div>
          <label htmlFor="puk">Please provide PUK</label>
          <input name="puk" />
          <button onClick={clickHandler}>Apply</button>
        </div>
      ) }
      <br/>
      <label htmlFor="simEnabled">SIM card enabled?</label>
      <input name="simEnabled" checked={simEnabled} onChange={(event) => toggleCheckbox(event)} type="checkbox" />
    </div>
  );
}

WirelessNetworkSim.propTypes = {
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

export default compose(withConnect)(WirelessNetworkSim);

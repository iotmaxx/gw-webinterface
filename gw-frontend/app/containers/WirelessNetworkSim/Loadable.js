/**
 *
 * Asynchronously loads the component for WirelessNetworkSim
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

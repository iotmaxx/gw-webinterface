/**
 *
 * Asynchronously loads the component for SystemHardware
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

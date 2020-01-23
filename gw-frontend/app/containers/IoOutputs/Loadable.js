/**
 *
 * Asynchronously loads the component for IoOutputs
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

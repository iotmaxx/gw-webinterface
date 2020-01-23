/**
 *
 * Asynchronously loads the component for IoInputs
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

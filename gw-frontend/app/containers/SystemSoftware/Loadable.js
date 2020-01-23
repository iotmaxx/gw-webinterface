/**
 *
 * Asynchronously loads the component for SystemSoftware
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

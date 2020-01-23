/**
 *
 * Asynchronously loads the component for IoSocketServer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

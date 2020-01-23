/**
 *
 * Asynchronously loads the component for IoComServer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

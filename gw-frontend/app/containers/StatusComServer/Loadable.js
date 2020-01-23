/**
 *
 * Asynchronously loads the component for StatusComServer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

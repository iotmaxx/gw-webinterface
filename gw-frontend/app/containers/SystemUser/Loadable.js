/**
 *
 * Asynchronously loads the component for SystemUser
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

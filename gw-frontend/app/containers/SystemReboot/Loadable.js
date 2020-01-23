/**
 *
 * Asynchronously loads the component for SystemReboot
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

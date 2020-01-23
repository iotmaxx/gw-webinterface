/**
 *
 * Asynchronously loads the component for LoginView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

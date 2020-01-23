/**
 *
 * Asynchronously loads the component for IoPhonebook
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

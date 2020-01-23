/*
 * SystemUser Messages
 *
 * This contains all the text for the SystemUser container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SystemUser';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SystemUser container!',
  },
});

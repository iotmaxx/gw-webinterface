/*
 * Feedback Messages
 *
 * This contains all the text for the Feedback component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Feedback';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Feedback component!',
  },
});

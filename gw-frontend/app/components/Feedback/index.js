/**
 *
 * Feedback
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Feedback({
  show,
  success,
  error,
  callDismiss,
  msg = null,
  callback = null,
}) {
  const showToast = () => {
    if (success) {
      const message =
        msg == null ? 'Success, your changes have been submitted!' : msg;
      ToastsStore.success(message);
    } else if (error) {
      const message =
        msg == null ? 'Failure, while submiting your changes!' : msg;
      ToastsStore.error(message);
    }
    setTimeout(() => {
      callDismiss();
      if (callback) callback();
    }, 3000);
  };

  return (
    <div>
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.BOTTOM_RIGHT}
      />
      {show && showToast()}
    </div>
  );
}

Feedback.propTypes = {
  show: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  callDismiss: PropTypes.func,
  msg: PropTypes.string,
  callback: PropTypes.func,
};

export default Feedback;

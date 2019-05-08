/*
 * SettingsPage
 *
 * This is the config page, at the '/settings' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function SettingsPage() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}

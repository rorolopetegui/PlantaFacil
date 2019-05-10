import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomePage from 'containers/HomePage/Loadable';
import SettingsPage from 'containers/SettingsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// NavBar
import { NavBar } from '../../components';

// Styles for global page
import GlobalStyle from '../../global-styles';
// Constants
import { MENU_TITLE } from './constants';

export default function App() {
  return (
    <div>
      <NavBar title={MENU_TITLE}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Settings" component={SettingsPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </NavBar>
      <footer>Footer</footer>
    </div>
  );
}

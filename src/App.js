
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'unstated';

import { ROOT_ROUTE } from './helper/routes';

import AppWrapper from './components';
import { Main } from './components/main';
import { ErrorPage } from './components/error-page';

import './styles/core.scss';

const App = () => {
  return (
    <Provider>
      <Router>
        <AppWrapper>
          <Switch>
            <Route exact path={ROOT_ROUTE} render={() => <Main />} />
            <Route path='*' component={ErrorPage} />
          </Switch>
        </AppWrapper>
      </Router>
    </Provider>
  );
};

export default App;

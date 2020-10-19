import React from 'react';
import AppBar from './components/Appbar';
import BottomNav from './components/BottomNav';
import BasicInfo from './components/BasicInfo';
import Details from './components/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaymentSetup from './components/PaymentSetup';

const CreateEvent = ({ match }) => {
  const [matchedRoute, setMatchedRoute] = React.useState('');

  React.useEffect(() => {
    setMatchedRoute(match.path.replace('/:id', ''));
  }, [match.path]);

  return (
    <Router>
      <AppBar />
      <Switch>
        <Route
          exact
          path={`${matchedRoute}/basic-info`}
          component={BasicInfo}
        />
        <Route exact path={`${matchedRoute}/details`} component={Details} />
        <Route
          exact
          path={`${matchedRoute}/payment-setup`}
          component={PaymentSetup}
        />
      </Switch>
      <BottomNav match={match} />
    </Router>
  );
};

export default CreateEvent;

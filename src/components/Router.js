import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from 'components/Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tv' exact component={TV} />
          <Route path='/search' component={Search} />
          <Route path='/movie/:id' component={Detail} />
          <Route path='/tv/:id' component={Detail} />
          <Redirect path='*' to='/' />
        </Switch>
      </>
    </Router>
  );
};

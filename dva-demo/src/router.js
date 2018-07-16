import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from "dva/dynamic";

function RouterConfig({ history, app }) {

    const IndexPage = dynamic({
      app,
      component: () => import('./routes/IndexPage')
    });
    const ListPage = dynamic({
      app,
      component: () => import('./routes/ListPage')
    });


  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/list" exact component={ListPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

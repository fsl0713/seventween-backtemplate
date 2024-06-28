import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '@/pages/layout';
import Login from '@/pages/Login';
import LockPage from '@/pages/Lock';
import AuthRouter from '@/pages/Auth/AuthRouter';
const Router = () => {
  let isLocked = useSelector((state) => state.toolReducer.isLocked);
  isLocked = isLocked == 0 ? true : false;
  return (
    <BrowserRouter>
      {isLocked && <LockPage />}
      {!isLocked && (
        <Switch>
          <Route path="/login" exact component={Login} />
          <AuthRouter path="/" component={Layout} />
        </Switch>
      )}
    </BrowserRouter>
  )
}

export default Router;
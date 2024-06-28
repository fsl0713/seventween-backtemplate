import React from 'react';
import { getToken } from '@/utils/auth';
import { withRouter, Route, Redirect } from 'react-router-dom';

const AuthRouter = ({ component: Component, ...args}) => {
  const token = getToken();
  return <Route {...args} render={(routes) => (token ? <Component {...routes} /> : <Redirect to="/login" />)} />
}

export default withRouter(AuthRouter);
import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes, defaultRoutes } from '@/router/routes';
import styles from './index.module.scss';

const MainContent = () => {
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const menus = JSON.stringify(userInfo) != '{}' ? userInfo.menus : {};
  let finalRoutes = [];
  for(let i = 0; i < menus.length; i++) {
    for(let j = 0; j < routes.length; j++) {
      if(menus[i].name === routes[j].name) {
        finalRoutes.push(routes[j]);
      }
    }
  }
  finalRoutes = [...finalRoutes, ...defaultRoutes];
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className={styles.mainContent}>
        <Switch>
          { 
            finalRoutes.map(ele => {
              return (
                <Route render={() => <ele.component /> } key={ele.path} path={ele.path} />
              )}
            )
          }
          {/* <Redirect from="/" exact to="/dashboard" /> */}
          <Redirect to="/error/404" />
        </Switch>
      </div>
    </Suspense>
  )
}

export default MainContent;
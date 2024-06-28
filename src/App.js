import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';
import Router from './router/index';
import store from '@/store/index';
function App() {
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#F559F4'
      },
      components: {
        // Menu: {
        //   // itemColor: '#000',
        //   // darkItemColor: '#000'
        // },
        Layout: {
          headerBg: '#fff',
          headerColor: '#000',
          siderBg: '#fff'
        }
      }
      // algorithm: theme.darkAlgorithm
    }}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ConfigProvider>
  );
}

export default App;

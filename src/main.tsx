import React from 'react';
import ReactDOM from 'react-dom/client';

import MyApp from './App';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { initUserInfo } from '@/hooks/useUserInfo';

import { DarkModeConfigProvider } from '@/components/DarkModeSwitch';
import { ThemeColorConfigProvider } from '@/components/ThemeColors';
import { ConfigProvider, App } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import viVN from 'antd/locale/vi_VN';
import 'antd/dist/reset.css';
import './App.css';

dayjs.locale('vi-vn');

initUserInfo();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <DarkModeConfigProvider>
        <ThemeColorConfigProvider>
          <ConfigProvider locale={viVN} input={{ autoComplete: 'off' }}>
            <App>
              <MyApp />
            </App>
          </ConfigProvider>
        </ThemeColorConfigProvider>
      </DarkModeConfigProvider>
    </PersistGate>
  </Provider>
);

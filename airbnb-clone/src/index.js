import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import App from '@/App';
import { HashRouter } from 'react-router-dom'

import "normalize.css"
import "./assets/css/common.css"
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>

  // </React.StrictMode>
);

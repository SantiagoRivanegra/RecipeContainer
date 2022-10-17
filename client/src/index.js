import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./redux/store";
import dotenv from 'dotenv'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import axios from 'axios';

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'es',
  resources:{
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  }
})

dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';

const rootElemnt = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElemnt)

root.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </I18nextProvider>,
);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AzureAD from 'react-aad-msal';
import { authProvider } from './AuthProvider';

ReactDOM.render(
  <AzureAD
    provider={authProvider}
    forceLogin>
      {/** Here, you are authentified */}
    <App />
  </AzureAD>,
  document.getElementById('root')
);

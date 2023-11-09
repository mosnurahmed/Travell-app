import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-mn0jxrcadoncvlme.us.auth0.com"
    clientId="RIfUfDX0may0gC6vHg59KYGcnGvIM43A"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      
    <App />
    </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)

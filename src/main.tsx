import React from 'react';

import type { AuthenticationResult} from '@azure/msal-browser';
import { EventType, PublicClientApplication } from '@azure/msal-browser';
import { createRoot } from 'react-dom/client';


import App from './App';
import { msalConfig } from './providers/auth/AuthConfig';

/**
* MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
* For more, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
*/
const msalInstance = new PublicClientApplication(msalConfig);

// Default to using the first account if no account is active on page load
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

msalInstance.addEventCallback((event) => {
  console.log('event', event);
  if (
        (event.eventType === EventType.LOGIN_SUCCESS ||
            event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
            event.eventType === EventType.SSO_SILENT_SUCCESS) &&
        (event.payload as AuthenticationResult).account
    ) {
        msalInstance.setActiveAccount((event.payload as AuthenticationResult).account);
        console.log('payload', event.payload);
    }

});


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App msalInstance={msalInstance} />
  </React.StrictMode>,
);

import React from 'react';

import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
// eslint-disable-next-line import/order
import { IonApp, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Tailwind styles */
import './theme/tailwind.css';

import './globals.css';

import { ShopProvider } from 'providers/shop/ShopProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

import CustomerAppRouter from './customerApp/CustomerAppRouter';
import PublicAppRouter from './pages/public/PublicAppRouter';
import { AuthProvider } from './providers/auth/AuthProvider';
import { CartProvider } from './providers/cart/CartProvider';

// eslint-disable-next-line import/order
import type { IPublicClientApplication } from '@azure/msal-browser';


interface AppProps {
  msalInstance: IPublicClientApplication
}

setupIonicReact();

const App: React.FC<AppProps> = ({ msalInstance }) => {

  const queryClient = new QueryClient();

  return (
    <AuthProvider msalInstance={msalInstance}>
      <QueryClientProvider client={queryClient}>
        <ShopProvider>
          <CartProvider>
            <IonApp>
              <AuthenticatedTemplate>
                <CustomerAppRouter />
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <PublicAppRouter />
              </UnauthenticatedTemplate>
            </IonApp>
          </CartProvider>
        </ShopProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;

import React from 'react';

import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


import PublicRoutes from './PublicRoutes';


const PublicAppRouter: React.FC = () => {
  return (
   <IonReactRouter>
      <IonRouterOutlet>
        <PublicRoutes />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default PublicAppRouter;

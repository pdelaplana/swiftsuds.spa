import React from "react";

import { IonContent, IonPage } from "@ionic/react";

const NotFoundPage: React.FC = () => {
  return(
    <IonPage>
      <IonContent>
        <div className="ion-text-center ion-justify-content-center">
          <h2>Page Not Found</h2>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;

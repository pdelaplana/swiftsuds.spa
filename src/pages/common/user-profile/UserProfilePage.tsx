import React, { useMemo } from "react";

import type { AccountInfo } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { IonButton, IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import BottomContainer from 'components/layout/BottomContainer';
import AuthenticatedPage from "pages/AuthenticatedPage";

const UserProfilePage : React.FC = () => {
  const { instance } = useMsal();

  const { activeAccount, handleLogout } = useMemo(() => {
    return {
      activeAccount: instance.getActiveAccount() as AccountInfo,
      handleLogout: () => instance.logoutRedirect()
    };
  },[instance]);

  return(
    <AuthenticatedPage title={"Your Account"} showProfileIcon={false} >
      <IonListHeader className="ion-margin-top">Account</IonListHeader>
      <IonList>
        <IonItem lines={"full"}>
          <IonLabel >
            {(activeAccount as AccountInfo).name}
          </IonLabel>
        </IonItem>
        <IonItem button={true} detail={true} lines={"full"}>
          <IonLabel>Update Your Info</IonLabel>
        </IonItem>
      </IonList>

      <BottomContainer>
        <IonButton expand="full" className="ion-padding" onClick={handleLogout}>
          Sign Out
        </IonButton>
      </BottomContainer>

    </AuthenticatedPage>
  );
};

export default UserProfilePage;

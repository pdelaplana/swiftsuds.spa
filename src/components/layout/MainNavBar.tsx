import React from 'react';

import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';

export interface NavBarItem {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface MainNavBarProps {
  navbar: NavBarItem[];
}

export const MainNavBar: React.FC<MainNavBarProps> = ({ navbar }) => {

  return (
      <IonTabBar slot="bottom">
          {navbar.map((navbaritem) => (
            <IonTabButton tab={navbaritem.name} href={navbaritem.url}>
              <IonIcon icon={navbaritem.icon} />
              <IonLabel>{navbaritem.label}</IonLabel>
            </IonTabButton>
          ))}
      </IonTabBar>

  );
};

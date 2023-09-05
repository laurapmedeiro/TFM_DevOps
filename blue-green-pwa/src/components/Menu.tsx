import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { cloudOutline, cloudSharp, homeOutline, homeSharp, logInOutline, logInSharp, navigateOutline, navigateSharp, personAddOutline, personAddSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Weather',
    url: '/page/weather',
    iosIcon: cloudOutline,
    mdIcon: cloudSharp
  },
  {
    title: 'Localization',
    url: '/page/localization',
    iosIcon: navigateOutline,
    mdIcon: navigateSharp
  },
];

const labels:  AppPage[] = [
 {
  title: 'Register',
  url: '/page/register',
  iosIcon: personAddOutline,
  mdIcon: personAddSharp
},
{
  title: 'Login',
  url: '/page/login',
  iosIcon: logInOutline,
  mdIcon: logInSharp
}
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    
    <IonMenu contentId="main" type="overlay">
      <img alt="Logo" src="resources/logo.png" />
      <IonContent>
        <IonList id="home-list">
          <IonListHeader>Menu</IonListHeader>
          <IonNote>
          </IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>My Account</IonListHeader>
          {labels.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

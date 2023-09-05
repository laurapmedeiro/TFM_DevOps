import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useParams } from 'react-router';
import './Account.css';

const Account: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
	const router = useIonRouter();
  const username = sessionStorage.getItem("username");
  const roles = sessionStorage.getItem("roles");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to your space {username} </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
           At this moment your active roles are: {roles}
          </IonCardContent>
         </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Account;

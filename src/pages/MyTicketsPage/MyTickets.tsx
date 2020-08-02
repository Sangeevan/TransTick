import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import MyTicketsContainer from '../../components/MyTicketsComponent/MyTicketsContainer';
import './MyTickets.css';

const MyTickets: React.FC = () => {
  return (
    <IonPage id="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Tickets</IonTitle>
          <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MyTicketsContainer />
      </IonContent>
    </IonPage>
  );
};

export default MyTickets;

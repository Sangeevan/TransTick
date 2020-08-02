import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AllTicketsContainer from '../../components/AllTicketsComponent/AllTicketsContainer';
import './AllTickets.css';

const AllTickets: React.FC = () => {
  return (
    <IonPage id="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Tickets</IonTitle>
          <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <AllTicketsContainer />
      </IonContent>
    </IonPage>
  );
};

export default AllTickets;

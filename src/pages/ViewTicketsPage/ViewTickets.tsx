import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ViewTicketsContainer from '../../components/ViewTicketsComponent/ViewTicketsContainer';
import './ViewTickets.css';

const AllTickets: React.FC = () => {
  return (
    <IonPage id="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Select District</IonTitle>
          <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ViewTicketsContainer />
      </IonContent>
    </IonPage>
  );
};

export default AllTickets;

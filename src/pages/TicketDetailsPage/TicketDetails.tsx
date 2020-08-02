import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import TicketDetailsContainer from '../../components/TicketDetailsComponent/TicketDetailsContainer';
import './TicketDetails.css';

const TicketDetails: React.FC = () => {
  return (
    <IonPage id="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ticket Details</IonTitle>
          <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <TicketDetailsContainer />
      </IonContent>
    </IonPage>
  );
};

export default TicketDetails;

import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import AddTicketContainer from '../../components/AllTicketsComponent/AllTicketsContainer';
import './AddTicket.css';

const AddTicket: React.FC = () => {
  return (
    <IonPage id="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Ticket</IonTitle>
          <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <AddTicketContainer />
      </IonContent>
    </IonPage>
  );
};

export default AddTicket;

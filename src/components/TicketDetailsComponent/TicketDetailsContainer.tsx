import {  IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import './TicketDetailsContainer.css';

interface ContainerProps { }

const TicketDetailsContainer: React.FC<ContainerProps> = () => {

  const ticket = {"id":"1","name":"Cinema","price":"100"};

  return (
    <div className="containerTicketDetails">
      <IonItem>
        <IonLabel>{ticket.name}</IonLabel>
        <IonLabel>{ticket.price}</IonLabel>
      </IonItem>
    </div>
  );
};

export default TicketDetailsContainer;

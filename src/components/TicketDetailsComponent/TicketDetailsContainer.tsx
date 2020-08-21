import { IonButton, IonCol, IonGrid, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonRow, IonThumbnail} from '@ionic/react';
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
        <IonButton>Buy</IonButton>
      </IonItem>
    </div>
  );
};

export default TicketDetailsContainer;

import {  IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import './TicketDetailsContainer.css';

interface ContainerProps { }

const TicketDetailsContainer: React.FC<ContainerProps> = () => {

  var ticketDetails = useSelector((state:any) => state.selectedticket.ticket);

  if(ticketDetails===undefined){
    ticketDetails = {event_name:"No details available"};
  }

  return (
    <div className="containerTicketDetails">
      <IonItem>
        <IonLabel>{ticketDetails.event_name}</IonLabel>
        <IonLabel>{ticketDetails.event_venue}</IonLabel>
        <IonLabel>{ticketDetails.event_price}</IonLabel>
      </IonItem>
    </div>
  );
};

export default TicketDetailsContainer;

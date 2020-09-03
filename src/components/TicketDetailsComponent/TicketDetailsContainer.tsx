import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList } from '@ionic/react';
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
      {ticketDetails.event_name === "No tickets available" &&<IonList>
        <IonItem lines="full">
          <IonLabel>
            <h2><b>No details available</b></h2>
          </IonLabel>
        </IonItem>
      </IonList>}
      {/* {ticketDetails.event_name !== "No tickets available" &&<IonList>
      <IonItem lines="full">
        <IonLabel>{ticketDetails.event_name}</IonLabel>
        <IonLabel>{ticketDetails.event_venue}</IonLabel>
        <IonLabel>{ticketDetails.event_price}</IonLabel>
      </IonItem>
      </IonList>} */}
      {ticketDetails.event_name !== "No tickets available" && <IonCard className="card">
        <img src="/assets/images/exhibition.png"/>
        {/* <IonCardHeader>
          <IonCardTitle><b>{ticketDetails.event_name}</b></IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent> */}
      </IonCard>}
    </div>
  );
};

export default TicketDetailsContainer;

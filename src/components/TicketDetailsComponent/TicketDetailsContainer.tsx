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
      {ticketDetails.event_name !== "No tickets available" && <IonCard>
        <img className="fitImage" src={ticketDetails.ticket_img}/>
        <IonCardHeader>
          <IonCardTitle><b>{ticketDetails.event_name}</b></IonCardTitle>
          <IonCardSubtitle>{ticketDetails.event_type} | {ticketDetails.event_district}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p><b>Ticket details</b></p>
          <IonCardSubtitle className="detailCol"><b>Date: </b>{ticketDetails.event_date}</IonCardSubtitle>
          <IonCardSubtitle className="detailCol"><b>Time: </b>{ticketDetails.event_time}</IonCardSubtitle>
          <IonCardSubtitle className="detailCol"><b>Venue: </b>{ticketDetails.event_venue}</IonCardSubtitle>
          <IonCardSubtitle className="detailCol"><b>Seats: </b>{ticketDetails.event_seats}</IonCardSubtitle>
          <IonCardSubtitle className="detailCol"><b>Price: </b>{ticketDetails.event_price}</IonCardSubtitle>
          <p><b>Contact details</b></p>
          <IonCardSubtitle className="detailCol"><b>Name: </b>{ticketDetails.event_person_name}</IonCardSubtitle>
          <IonCardSubtitle className="detailCol"><b>Phone: </b>{ticketDetails.event_person_number}</IonCardSubtitle>
          <IonCardSubtitle className="detailCol"><b>Email: </b>{ticketDetails.event_person_email}</IonCardSubtitle>
          <p><b>Extra notes</b></p>
          <IonCardSubtitle className="detailCol">{ticketDetails.event_extra_notes}</IonCardSubtitle>
        </IonCardContent>
      </IonCard>}
    </div>
  );
};

export default TicketDetailsContainer;

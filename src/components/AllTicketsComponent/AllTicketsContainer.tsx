import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption} from '@ionic/react';
import React, { useState, valueOf } from 'react';
import './AllTicketsContainer.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ContainerProps {}

const AllTicketsContainer: React.FC<ContainerProps> = () => {
const history = useHistory();

var allTicket = useSelector((state:any) => state.alltickets.tickets);

if((useSelector((state:any) => state.alltickets.tickets))==undefined){
  allTicket = [{event_name:"No tickets available"}];
}

  return (
    <div className="containerAllTickets">
      <IonList>
        {allTicket.map((ticket: { event_name: React.ReactNode; event_price: React.ReactNode; }) => (
          <IonItem>
            <IonLabel>{ticket.event_name}</IonLabel>
            <IonLabel>{ticket.event_price}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

function ticketDetails(history:any, selectedTicket:string){
  alert(selectedTicket);
  history.push('/ticketdetails');
}

export default AllTicketsContainer;

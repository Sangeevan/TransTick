import { IonButton, IonCol, IonGrid, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonRow, IonThumbnail} from '@ionic/react';
import React from 'react';
import TicketDetails from '../../pages/TicketDetailsPage/TicketDetails';
import './AllTicketsContainer.css';

interface ContainerProps { }

const AllTicketsContainer: React.FC<ContainerProps> = () => {

const tickets = [{"id":"1","name":"Cinema","price":"100"},
                {"id":"2","name":"Music","price":"250"},
                {"id":"3","name":"Dance","price":"500"},
                {"id":"4","name":"Sports","price":"1000"}];

  return (
    <div className="containerAllTickets">
      <IonList>
        {tickets.map(ticket => (
          <IonItem button onClick={()=>ticketDetails(ticket.id)}>
              <IonLabel>{ticket.name}</IonLabel>
              <IonLabel>{ticket.price}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

function ticketDetails(selectedTicket:string){
  alert(selectedTicket);
  window.location.href = "/ticketdetails";
}

export default AllTicketsContainer;

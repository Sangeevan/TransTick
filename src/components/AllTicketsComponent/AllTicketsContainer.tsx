import { IonItem, IonLabel, IonList} from '@ionic/react';
import React from 'react';
import TicketDetails from '../../pages/TicketDetailsPage/TicketDetails';
import './AllTicketsContainer.css';
import { useHistory } from 'react-router-dom';

interface ContainerProps { }

const AllTicketsContainer: React.FC<ContainerProps> = () => {

const tickets = [{"id":"1","name":"Cinema","price":"100"},
                {"id":"2","name":"Music","price":"250"},
                {"id":"3","name":"Dance","price":"500"},
                {"id":"4","name":"Sports","price":"1000"}];

const history = useHistory();

  return (
    <div className="containerAllTickets">
      <IonList>
        {tickets.map(ticket => (
          <IonItem button onClick={()=>ticketDetails(history, ticket.id)}>
              <IonLabel>{ticket.name}</IonLabel>
              <IonLabel>{ticket.price}</IonLabel>
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

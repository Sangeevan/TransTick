import { IonButton, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import './MyTicketsContainer.css';
import { useHistory } from 'react-router-dom';

interface ContainerProps { }

const MyTicketsContainer: React.FC<ContainerProps> = () => {

  const tickets = [{"id":"1","name":"Cinema","price":"100"},
                {"id":"2","name":"Music","price":"250"},
                {"id":"3","name":"Dance","price":"500"},
                {"id":"4","name":"Sports","price":"1000"}];

  const history = useHistory();

  return (
    <div className="containerMyTickets">
      <IonList>
        {tickets.map(ticket => (
          <IonItem>
              <IonLabel>{ticket.name}</IonLabel>
              <IonLabel>{ticket.price}</IonLabel>
              <IonButton onClick={()=>deleteTicket(history, ticket.id)}>Delete</IonButton>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

function deleteTicket(history:any, selectedTicket:string){
  alert(selectedTicket);
  history.push('/mytickets');
}

export default MyTicketsContainer;

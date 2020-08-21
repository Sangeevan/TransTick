import { IonButton, IonCol, IonGrid, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonRow, IonThumbnail} from '@ionic/react';
import React from 'react';
import './MyTicketsContainer.css';

interface ContainerProps { }

const MyTicketsContainer: React.FC<ContainerProps> = () => {

  const tickets = [{"id":"1","name":"Cinema","price":"100"},
                {"id":"2","name":"Music","price":"250"},
                {"id":"3","name":"Dance","price":"500"},
                {"id":"4","name":"Sports","price":"1000"}];

  return (
    <div className="containerMyTickets">
      <IonList>
        {tickets.map(ticket => (
          <IonItem>
              <IonLabel>{ticket.name}</IonLabel>
              <IonLabel>{ticket.price}</IonLabel>
              <IonButton onClick={()=>deleteTicket(ticket.id)}>Delete</IonButton>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

function deleteTicket(selectedTicket:string){
  alert(selectedTicket);
  window.location.href = "/mytickets";
}

export default MyTicketsContainer;

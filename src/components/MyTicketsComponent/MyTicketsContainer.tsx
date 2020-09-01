import { IonAlert, IonButton, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';
import './MyTicketsContainer.css';
import { useHistory } from 'react-router-dom';
import { getMyTickets, deleteTicket } from '../../firebaseConfig';
import { setMyTicketsState } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

interface ContainerProps { }

const MyTicketsContainer: React.FC<ContainerProps> = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [ticketEventType, setTicketEventType] = useState('');
  const [ticketEventDistrict, setTicketEventDistrict] = useState('');

  const userName = useSelector((state:any) => state.user.username);

  const dispatch = useDispatch();
  const history = useHistory();

  myTickets(dispatch,userName);

  var myTicket = useSelector((state:any) => state.mytickets.tickets);

  if(myTicket===undefined){
    myTicket = [{event_name:"No tickets available"}];
  }

  return (
    <div className="containerMyTickets">
      <IonList>
        {myTicket.map((ticket: { id: string; event_name: string; event_price: string; event_type: string; event_district: string; }) => (
           <IonItem>
            <IonLabel>{ticket.event_name}</IonLabel>
            <IonLabel>{ticket.event_price}</IonLabel>
            {ticket.event_name !== "No tickets available" && <IonButton onClick={()=>{setShowAlert(true);setTicketId(ticket.id);setTicketEventType(ticket.event_type);setTicketEventDistrict(ticket.event_district)}}>Delete</IonButton>}
            </IonItem>
        ))}
      </IonList>
      <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              cssClass='alert-box'
              header={'Confirm!'}
              message={'Do you want to <strong>delete</strong> this ticket?'}
              buttons={[
                {
                  text: 'Cancel',
                  role: 'cancel'
                },
                {
                  text: 'Okay',
                  handler: () => {
                    deleteMyTicket(history,userName,ticketId,ticketEventType,ticketEventDistrict);
                  }
                }
              ]}
            />
    </div>
  );
};

async function myTickets(dispatch:any, userName:string){
  var tickets = (await getMyTickets(userName) && await getMyTickets(userName)) || 'Anonymous';
  if(tickets === 'Anonymous'){
    var noTicket = [{event_name:"No tickets available"}];
    dispatch(setMyTicketsState(noTicket));
  }else{
    var myTicket = Object.values(tickets);
    dispatch(setMyTicketsState(myTicket));
  }
}

async function deleteMyTicket(history:any, userName:string, id:any, eventType:any, eventDistrict:any){
  await deleteTicket(userName,id,eventType, eventDistrict);
  history.push('/mytickets');
}

export default MyTicketsContainer;

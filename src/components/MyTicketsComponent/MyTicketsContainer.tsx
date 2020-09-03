import { IonAlert, IonButton, IonChip, IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
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
        {myTicket.map((ticket: { ticket_img: string; id: string; event_name: string; event_date: string; event_seats: string; event_type: string; event_district: string; }) => (
          <IonItem lines="full">
            <IonList className="bgColor">
              <IonItem lines="none">
                {ticket.event_name !== "No tickets available" && <IonThumbnail slot="start">
                    <IonImg src={ticket.ticket_img}/>
                  </IonThumbnail>}
                  <IonLabel>
                    <h2><b>{ticket.event_name}</b></h2>
                    {ticket.event_name !== "No tickets available" && <IonLabel>
                    Date: {ticket.event_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <IonChip color="primary">{ticket.event_seats}</IonChip>
                    </IonLabel>}
                  </IonLabel>
              </IonItem>
              {ticket.event_name !== "No tickets available" && <IonButton className="btnDelete" expand="block" onClick={()=>{setShowAlert(true);setTicketId(ticket.id);setTicketEventType(ticket.event_type);setTicketEventDistrict(ticket.event_district)}}>Delete</IonButton>}
            </IonList>
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

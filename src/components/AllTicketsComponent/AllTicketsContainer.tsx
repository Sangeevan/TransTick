import { IonChip, IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import React from 'react';
import './AllTicketsContainer.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTicketState } from '../../redux/action';

interface ContainerProps { }

const AllTicketsContainer: React.FC<ContainerProps> = () => {

const history = useHistory();
const dispatch = useDispatch();

var allTicket = useSelector((state:any) => state.alltickets.tickets);

if(allTicket===undefined){
  allTicket = [{event_name:"No tickets available"}];
}

  return (
    <div className="containerAllTickets">
      <IonList>
        {allTicket.map((ticket: { ticket_img: string; event_name: React.ReactNode; event_seats: React.ReactNode; event_date: React.ReactNode;}) => (
          <IonItem lines="full" onClick={()=>ticketDetails(history,dispatch,ticket)}>
              {ticket.event_name !== "No tickets available" && <IonThumbnail slot="start">
                <IonImg src={ticket.ticket_img}/>
              </IonThumbnail>}
              <IonLabel>
                <h2><b>{ticket.event_name}</b></h2>
                {ticket.event_name !== "No tickets available" && <IonLabel>
                Date: {ticket.event_date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <IonChip color="primary">{ticket.event_seats}</IonChip>
              </IonLabel>}
              </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

function ticketDetails(history:any, dispatch:any, selectedTicket:any){
  dispatch(setSelectedTicketState(selectedTicket));
  history.push('/ticketdetails');
}

export default AllTicketsContainer;

import { IonItem, IonLabel, IonList } from '@ionic/react';
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
        {allTicket.map((ticket: { event_name: React.ReactNode; event_price: React.ReactNode; }) => (
          <IonItem onClick={()=>ticketDetails(history,dispatch,ticket)}>
            <IonLabel>{ticket.event_name}</IonLabel>
            <IonLabel>{ticket.event_price}</IonLabel>
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

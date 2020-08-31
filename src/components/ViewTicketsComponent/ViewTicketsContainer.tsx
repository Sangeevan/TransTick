import { IonButton, IonList } from '@ionic/react';
import React from 'react';
import './ViewTicketsContainer.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {getAllTickets} from '../../firebaseConfig';
import { setAllTicketsState } from '../../redux/action';
import { useDispatch } from 'react-redux';

interface ContainerProps { }

const MyTicketsContainer: React.FC<ContainerProps> = () => {

  const dispatch = useDispatch();
  const selectedEventType = useSelector((state:any) => state.event.type);
  const history = useHistory();

  return (
    <div className="containerViewTickets">
      <IonList>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Ampara')}  >Ampara</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Anuradhapura')}  >Anuradhapura</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Badulla')}  >Badulla</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Batticaloa')}  >Batticaloa</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Colombo')}  >Colombo</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Galle')}  >Galle</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Gampaha')}  >Gampaha</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Hambantota')}  >Hambantota</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Jaffna')}  >Jaffna</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Kalutara')}  >Kalutara</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Kandy')}  >Kandy</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Kegalle')}  >Kegalle</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Kilinochchi')}  >Kilinochchi</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Kurunegala')}  >Kurunegala</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Mannar')}  >Mannar</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Matale')}  >Matale</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Matara')}  >Matara</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Moneragala')}  >Moneragala</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Mullaitivu')}  >Mullaitivu</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Nuwara Eliya')}  >Nuwara Eliya</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Polonnaruwa')}  >Polonnaruwa</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Puttalam')}  >Puttalam</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Ratnapura')}  >Ratnapura</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Trincomalee')}  >Trincomalee</IonButton>
        <IonButton id="distbutton" className="dist-button" expand="block" onClick={()=>viewTickets(history,dispatch,selectedEventType,'Vavuniya')}  >Vavuniya</IonButton>
      </IonList>
    </div>
  );
};

async function viewTickets(history:any,dispatch:any,eventType:string, selectedDistrict:string){
  var tickets = (await getAllTickets(eventType,selectedDistrict) && await getAllTickets(eventType,selectedDistrict)) || 'Anonymous';
  if(tickets === 'Anonymous'){
    var noTicket = [{event_name:"No tickets available"}];
    dispatch(setAllTicketsState(noTicket));
  }else{
    var allTicket = Object.values(tickets);
    dispatch(setAllTicketsState(allTicket));
  }
  history.push('/alltickets');
}

export default MyTicketsContainer;

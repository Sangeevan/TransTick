import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption} from '@ionic/react';
import React, { useState, valueOf } from 'react';
import './AllTicketsContainer.css';
import { useHistory } from 'react-router-dom';
import {getAllTickets} from '../../firebaseConfig';

interface ContainerProps { }

const AllTicketsContainer: React.FC<ContainerProps> = () => {

const history = useHistory();

const [eventDistrict, setEventDistrict] = useState<string>();

  return (
    <div className="containerAllTickets">
      <IonList>
          <IonItem lines="full">
            <IonLabel position="floating">Filter by district</IonLabel>
            <IonSelect value={eventDistrict} onIonChange={e => {setEventDistrict(e.detail.value);filterbydistrict(history,e.detail.value)}}>
              <IonSelectOption value="Ampara">Ampara</IonSelectOption>
              <IonSelectOption value="Anuradhapura">Anuradhapura</IonSelectOption>
              <IonSelectOption value="Badulla">Badulla</IonSelectOption>
              <IonSelectOption value="Batticaloa">Batticaloa</IonSelectOption>
              <IonSelectOption value="Colombo">Colombo</IonSelectOption>
              <IonSelectOption value="Galle">Galle</IonSelectOption>
              <IonSelectOption value="Gampaha">Gampaha</IonSelectOption>
              <IonSelectOption value="Hambantota">Hambantota</IonSelectOption>
              <IonSelectOption value="Jaffna">Jaffna</IonSelectOption>
              <IonSelectOption value="Kalutara">Kalutara</IonSelectOption>
              <IonSelectOption value="Kandy">Kandy</IonSelectOption>
              <IonSelectOption value="Kegalle">Kegalle</IonSelectOption>
              <IonSelectOption value="Kilinochchi">Kilinochchi</IonSelectOption>
              <IonSelectOption value="Kurunegala">Kurunegala</IonSelectOption>
              <IonSelectOption value="Mannar">Mannar</IonSelectOption>
              <IonSelectOption value="Matale">Matale</IonSelectOption>
              <IonSelectOption value="Matara">Matara</IonSelectOption>
              <IonSelectOption value="Moneragala">Moneragala</IonSelectOption>
              <IonSelectOption value="Mullaitivu">Mullaitivu</IonSelectOption>
              <IonSelectOption value="Nuwara Eliya">Nuwara Eliya</IonSelectOption>
              <IonSelectOption value="Polonnaruwa">Polonnaruwa</IonSelectOption>
              <IonSelectOption value="Puttalam">Puttalam</IonSelectOption>
              <IonSelectOption value="Ratnapura">Ratnapura</IonSelectOption>
              <IonSelectOption value="Trincomalee">Trincomalee</IonSelectOption>
              <IonSelectOption value="Vavuniya">Vavuniya</IonSelectOption>
            </IonSelect>    
                 
          </IonItem>
      </IonList>
      <div className="containerAllTickets">
      <IonList>
        {/* {tickets.map(ticket => (
          <IonItem button onClick={()=>ticketDetails(history, ticket.id)}>
              <IonLabel>{ticket.name}</IonLabel>
              <IonLabel>{ticket.price}</IonLabel>
          </IonItem>
        ))} */}
      </IonList>
      </div>
    </div>
  );
};

async function filterbydistrict(history:any,district:string){
//  console.log(await getAllTickets());

 var username = (await getAllTickets() && await getAllTickets()) || 'Anonymous';

 console.log(username['1598709165788']);

  history.push('/alltickets');
}

function ticketDetails(history:any, selectedTicket:string){
  alert(selectedTicket);
  history.push('/ticketdetails');
}

export default AllTicketsContainer;

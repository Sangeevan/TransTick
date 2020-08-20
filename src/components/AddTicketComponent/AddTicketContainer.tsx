import { IonButton, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';
import { isNull } from 'util';
import './AddTicketContainer.css';

interface ContainerProps { }

const AddTicketContainer: React.FC<ContainerProps> = () => {

  const [eventName, setEventName] = useState<string>();
  const [eventData, setEventData] = useState<string>();
  const [eventTime, setEventTime] = useState<string>();
  const [eventVenue, setEventVenue] = useState<string>();
  const [eventDistrict, setEventDistrict] = useState<string>();
  const [eventPrice, setEventPrice] = useState<string>();
  const [eventPersonName, setEventPersonName] = useState<string>();
  const [eventPersonNumber, setEventPersonNumber] = useState<string>();
  const [eventExtraNotes, setEventExtraNotes] = useState<string>();

  return (
    <div className="containerAddTicket">
      <IonList>  
          <IonItem>
            <IonLabel position="floating">Name of the event</IonLabel>
            <IonInput type="text" value={eventName} onIonChange={e => setEventName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Event date</IonLabel>
            <IonInput className="topMargin" type="date" value={eventData} onIonChange={e => setEventData(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Event time</IonLabel>
            <IonInput className="topMargin" type="time" value={eventTime} onIonChange={e => setEventTime(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Event venue</IonLabel>
            <IonInput type="text" value={eventVenue} onIonChange={e => setEventVenue(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Venue district</IonLabel>
            <IonSelect value={eventDistrict} onIonChange={e => setEventDistrict(e.detail.value)}>
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
          <IonItem>
            <IonLabel position="floating">Ticket price</IonLabel>
            <IonInput type="number" value={eventPrice} onIonChange={e => setEventPrice(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Contact person name</IonLabel>
            <IonInput type="text" value={eventPersonName} onIonChange={e => setEventPersonName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Contact number</IonLabel>
            <IonInput type="number" value={eventPersonNumber} onIonChange={e => setEventPersonNumber(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Extra notes</IonLabel>
            <IonTextarea value={eventExtraNotes} onIonChange={e => setEventExtraNotes(e.detail.value!)}></IonTextarea>
          </IonItem>
      </IonList>
      <br/>
      <IonButton id="loginbtn" className="login-button" expand="block" onClick={()=>addTicket(eventName, eventData, eventTime, eventVenue, eventDistrict, eventPrice, eventPersonName, eventPersonNumber, eventExtraNotes)} >Create account</IonButton>
      
    </div>
  );
};

function addTicket(eventName: string | undefined, eventData: string | undefined, eventTime: string | undefined, eventVenue: string | undefined, eventDistrict: string | undefined, eventPrice: string | undefined, eventPersonName: string | undefined, eventPersonNumber: string | undefined, eventExtraNotes: string | undefined){
  let ticket = false;
  if(true){
    ticket = true;
  }
  if(ticket){
    alert(["Name of the event: "+ eventName+ "\n"+ "Event date: "+ eventData+ "\n"+ "Event time: "+ eventTime+ "\n"+ "Event venue: "+ eventVenue+ "\n"+ "Venue district: "+ eventDistrict+ "\n"+ "Ticket price: "+ eventPrice+ "\n"+ "Contact person name: "+ eventPersonName+ "\n"+ "Contact number: "+ eventPersonNumber+ "\n"+ "Extra notes: "+ eventExtraNotes]);
    window.location.href = "/mytickets";
  }
}

export default AddTicketContainer;

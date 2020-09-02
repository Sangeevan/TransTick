import { IonButton, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';
import './AddTicketContainer.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from '../../toast';
import {addTicket} from '../../firebaseConfig';

interface ContainerProps { }

const AddTicketContainer: React.FC<ContainerProps> = () => {

  const [eventName, setEventName] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventTime, setEventTime] = useState<string>('');
  const [eventVenue, setEventVenue] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [eventDistrict, setEventDistrict] = useState<string>('');
  const [eventPrice, setEventPrice] = useState<string>('');
  const [eventSeats, setEventSeats] = useState<string>('');
  const [eventPersonName, setEventPersonName] = useState<string>('');
  const [eventPersonNumber, setEventPersonNumber] = useState<string>('');
  const [eventPersonEmail, setEventPersonEmail] = useState<string>('');
  const [eventExtraNotes, setEventExtraNotes] = useState<string>('');

  const history = useHistory();
  const userName = useSelector((state:any) => state.user.username);
  const [file, setFile] = useState();

  var fileButton = document.getElementById('fileButton');
  fileButton?.addEventListener('change',function(e){
    if(e.target){
      setFile(e.target.files[0]);
    }
  })

  return (
    <div className="containerAddTicket">
      <IonList>  
          <IonItem>
            <IonLabel position="floating">Name of the event</IonLabel>
            <IonInput type="text" value={eventName} onIonChange={e => setEventName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Event date</IonLabel>
            <IonInput className="topMargin" type="date" value={eventDate} onIonChange={e => setEventDate(e.detail.value!)}></IonInput>
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
            <IonLabel position="floating">Event type</IonLabel>
            <IonSelect value={eventType} onIonChange={e => setEventType(e.detail.value)}>
              <IonSelectOption value="Cinema">Cinema</IonSelectOption>
              <IonSelectOption value="Music">Music</IonSelectOption>
              <IonSelectOption value="Dance">Dance</IonSelectOption>
              <IonSelectOption value="Sports">Sports</IonSelectOption>
              <IonSelectOption value="Festivals">Festivals</IonSelectOption>
              <IonSelectOption value="Shows">Shows</IonSelectOption>
              <IonSelectOption value="Party">Party</IonSelectOption>
              <IonSelectOption value="Exhibition">Exhibition</IonSelectOption>
              <IonSelectOption value="Seminar">Seminar</IonSelectOption>
              <IonSelectOption value="Other">Other</IonSelectOption>
            </IonSelect>
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
            <IonLabel position="floating">Number of seats</IonLabel>
            <IonInput type="number" value={eventSeats} onIonChange={e => setEventSeats(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem lines="full">
            <div>Image&nbsp;</div>
            <div>
              <input type="file"  id="fileButton"/>
            </div>
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
            <IonLabel position="floating">Contact email</IonLabel>
            <IonInput type="email" value={eventPersonEmail} onIonChange={e => setEventPersonEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Extra notes</IonLabel>
            <IonTextarea value={eventExtraNotes} onIonChange={e => setEventExtraNotes(e.detail.value!)}></IonTextarea>
          </IonItem>
      </IonList>
      <br/>
      <IonButton id="addticketbtn" className="addticket-button" expand="block" onClick={()=>ticket(history, userName, eventName, eventDate, eventTime, eventVenue, eventType, eventDistrict, eventPrice, eventSeats, eventPersonName, eventPersonNumber, eventPersonEmail, eventExtraNotes, file)} >Add Ticket</IonButton>
    </div>
  );
};

async function ticket(history: any, userName:string, eventName: string, eventDate: string, eventTime: string, eventVenue: string, eventType: string, eventDistrict: string, eventPrice: string, eventSeats: string, eventPersonName: string, eventPersonNumber: string, eventPersonEmail: string, eventExtraNotes: string, file:any){
  let addTicketValidation = false;
  if(eventName && eventDate && eventTime && eventVenue && eventType && eventDistrict && eventPrice && eventSeats && eventPersonName && eventPersonNumber && eventPersonEmail && eventExtraNotes && file){
    addTicketValidation = true;
  }else{
    toast('Please fill all fields');
  }
  if(addTicketValidation){
    const id = Date.now();
    const resp = await addTicket(id, userName, eventName, eventDate, eventTime, eventVenue, eventType, eventDistrict, eventPrice, eventSeats, eventPersonName, eventPersonNumber, eventPersonEmail, eventExtraNotes, file);
    if(resp){
      toast('Ticket added successfully!');
      history.push('/mytickets');
    }
  }
}

export default AddTicketContainer;

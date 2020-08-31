import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonImg } from '@ionic/react';
import { addSharp } from 'ionicons/icons';
import React from 'react';
import './HomeContainer.css';
import { useHistory } from 'react-router-dom';
import { setEventTypeState } from '../../redux/action';
import { useDispatch } from 'react-redux';

interface ContainerProps { }

const HomeContainer: React.FC<ContainerProps> = () => {

  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <IonContent fullscreen>
      <div className="containerHome">
        <IonButton id="Cinema" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Cinema")} >
          <IonImg alt="Cinema" src="/assets/images/cinema.png"/>
        </IonButton>
        <IonButton id="Music" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Music")} >
          <IonImg alt="Music" src="/assets/images/music.png"/>
        </IonButton>
        <IonButton id="Dance" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Dance")} >
          <IonImg alt="Dance" src="/assets/images/dance.png"/>
        </IonButton>
        <IonButton id="Sports" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Sports")} >
          <IonImg alt="Sports" src="/assets/images/sports.png"/>
        </IonButton>
        <IonButton id="Festivals" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Festivals")} >
          <IonImg alt="Festivals" src="/assets/images/festival.png"/>
        </IonButton>
        <IonButton id="Shows" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Shows")} >
          <IonImg alt="Shows" src="/assets/images/shows.png"/>
        </IonButton>
        <IonButton id="Party" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Party")} >
          <IonImg alt="Party" src="/assets/images/party.png"/>
        </IonButton>
        <IonButton id="Exhibition" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Exhibition")} >
          <IonImg alt="Exhibition" src="/assets/images/exhibition.png"/>
        </IonButton>
        <IonButton id="Seminar" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Seminar")} >
          <IonImg alt="Seminar" src="/assets/images/seminar.png"/>
        </IonButton>
        <IonButton id="Other" className="homeButton" expand="block" onClick={()=>allTickets(history, dispatch, "Other")} >
          <IonImg alt="Other" src="/assets/images/other.png"/>
        </IonButton>
      </div>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/addticket">
          <IonIcon icon={addSharp} />
        </IonFabButton>
      </IonFab>
    
    </IonContent>
  );
};

function allTickets(history:any, dispatch:any, selectedType:string){
  dispatch(setEventTypeState(selectedType));
  history.push('/viewtickets');
}

export default HomeContainer;

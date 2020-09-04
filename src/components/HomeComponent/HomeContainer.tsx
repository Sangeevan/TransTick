import { IonButton, IonCard, IonCardTitle, IonContent, IonFab, IonFabButton, IonIcon, IonImg } from '@ionic/react';
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
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Cinema")} >
          <IonImg className="fitImg" alt="Cinema" src="/assets/images/cinema.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Cinema</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Music")} >
          <IonImg className="fitImg" alt="Music" src="/assets/images/music.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Music</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Dance")} >
          <IonImg className="fitImg" alt="Dance" src="/assets/images/dance.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Dance</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Sports")} >
          <IonImg className="fitImg" alt="Sports" src="/assets/images/sports.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Sports</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Festivals")} >
          <IonImg className="fitImg" alt="Festivals" src="/assets/images/festival.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Festivals</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Shows")} >
          <IonImg className="fitImg" alt="Shows" src="/assets/images/shows.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Shows</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Party")} >
          <IonImg className="fitImg" alt="Party" src="/assets/images/party.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Party</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Exhibition")} >
          <IonImg className="fitImg" alt="Exhibition" src="/assets/images/exhibition.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Exhibition</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Seminar")} >
          <IonImg className="fitImg" alt="Seminar" src="/assets/images/seminar.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Seminar</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Other")} >
          <IonImg className="fitImg" alt="Other" src="/assets/images/other.jpg"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Other</IonCardTitle>
        </IonCard>
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

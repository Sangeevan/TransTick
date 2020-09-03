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
          <IonImg alt="Cinema" src="/assets/images/cinema.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Cinema</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Music")} >
          <IonImg alt="Music" src="/assets/images/music.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Music</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Dance")} >
          <IonImg alt="Dance" src="/assets/images/dance.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Dance</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Sports")} >
          <IonImg alt="Sports" src="/assets/images/sports.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Sports</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Festivals")} >
          <IonImg alt="Festivals" src="/assets/images/festival.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Festivals</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Shows")} >
          <IonImg alt="Shows" src="/assets/images/shows.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Shows</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Party")} >
          <IonImg alt="Party" src="/assets/images/party.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Party</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Exhibition")} >
          <IonImg alt="Exhibition" src="/assets/images/exhibition.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Exhibition</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Seminar")} >
          <IonImg alt="Seminar" src="/assets/images/seminar.png"/>
          <IonCardTitle className="md-card-title mbsc-align-center">Seminar</IonCardTitle>
        </IonCard>
        <IonCard className="md-card-bg" onClick={()=>allTickets(history, dispatch, "Other")} >
          <IonImg alt="Other" src="/assets/images/other.png"/>
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

import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonImg, IonLabel } from '@ionic/react';
import { addSharp } from 'ionicons/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import './HomeContainer.css';
import { useHistory } from 'react-router-dom';

interface ContainerProps { }

const HomeContainer: React.FC<ContainerProps> = () => {

  const message = useSelector((state:any) => state.user.username);

  const history = useHistory();

  return (
    <IonContent fullscreen>
      <IonLabel>Hi! {message}</IonLabel>
      <div className="containerHome">
        <IonButton id="Cinema" className="homeButton" expand="block" onClick={()=>allTickets(history, "Cinema")} >
          <IonImg alt="Cinema" src="/assets/images/cinema.png"/>
        </IonButton>
        <IonButton id="Music" className="homeButton" expand="block" onClick={()=>allTickets(history, "Music")} >
          <IonImg alt="Music" src="/assets/images/music.png"/>
        </IonButton>
        <IonButton id="Dance" className="homeButton" expand="block" onClick={()=>allTickets(history, "Dance")} >
          <IonImg alt="Dance" src="/assets/images/dance.png"/>
        </IonButton>
        <IonButton id="Sports" className="homeButton" expand="block" onClick={()=>allTickets(history, "Sports")} >
          <IonImg alt="Sports" src="/assets/images/sports.png"/>
        </IonButton>
        <IonButton id="Festivals" className="homeButton" expand="block" onClick={()=>allTickets(history, "Festivals")} >
          <IonImg alt="Festivals" src="/assets/images/festival.png"/>
        </IonButton>
        <IonButton id="Shows" className="homeButton" expand="block" onClick={()=>allTickets(history, "Shows")} >
          <IonImg alt="Shows" src="/assets/images/shows.png"/>
        </IonButton>
        <IonButton id="Party" className="homeButton" expand="block" onClick={()=>allTickets(history, "Party")} >
          <IonImg alt="Party" src="/assets/images/party.png"/>
        </IonButton>
        <IonButton id="Exhibition" className="homeButton" expand="block" onClick={()=>allTickets(history, "Exhibition")} >
          <IonImg alt="Exhibition" src="/assets/images/exhibition.png"/>
        </IonButton>
        <IonButton id="Seminar" className="homeButton" expand="block" onClick={()=>allTickets(history, "Seminar")} >
          <IonImg alt="Seminar" src="/assets/images/seminar.png"/>
        </IonButton>
        <IonButton id="Other" className="homeButton" expand="block" onClick={()=>allTickets(history, "Other")} >
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

function allTickets(history:any, selectedType:string){
  alert(selectedType);
  history.push('/alltickets');
}

export default HomeContainer;

import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonImg } from '@ionic/react';
import { addSharp } from 'ionicons/icons';
import React from 'react';
import './HomeContainer.css';

interface ContainerProps { }

const HomeContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent fullscreen>
      
      <div className="containerHome">
        <IonButton id="Cinema" className="homeButton" expand="block" onClick={()=>allTickets("Cinema")} >
          <IonImg alt="Cinema" src="/assets/images/cinema.png"/>
        </IonButton>
        <IonButton id="Music" className="homeButton" expand="block" onClick={()=>allTickets("Music")} >
          <IonImg alt="Music" src="/assets/images/music.png"/>
        </IonButton>
        <IonButton id="Dance" className="homeButton" expand="block" onClick={()=>allTickets("Dance")} >
          <IonImg alt="Dance" src="/assets/images/dance.png"/>
        </IonButton>
        <IonButton id="Sports" className="homeButton" expand="block" onClick={()=>allTickets("Sports")} >
          <IonImg alt="Sports" src="/assets/images/sports.png"/>
        </IonButton>
        <IonButton id="Festivals" className="homeButton" expand="block" onClick={()=>allTickets("Festivals")} >
          <IonImg alt="Festivals" src="/assets/images/festival.png"/>
        </IonButton>
        <IonButton id="Shows" className="homeButton" expand="block" onClick={()=>allTickets("Shows")} >
          <IonImg alt="Shows" src="/assets/images/shows.png"/>
        </IonButton>
        <IonButton id="Party" className="homeButton" expand="block" onClick={()=>allTickets("Party")} >
          <IonImg alt="Party" src="/assets/images/party.png"/>
        </IonButton>
        <IonButton id="Exhibition" className="homeButton" expand="block" onClick={()=>allTickets("Exhibition")} >
          <IonImg alt="Exhibition" src="/assets/images/exhibition.png"/>
        </IonButton>
        <IonButton id="Seminar" className="homeButton" expand="block" onClick={()=>allTickets("Seminar")} >
          <IonImg alt="Seminar" src="/assets/images/seminar.png"/>
        </IonButton>
        <IonButton id="Other" className="homeButton" expand="block" onClick={()=>allTickets("Other")} >
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

function allTickets(selectedType:string){
  alert(selectedType);
  window.location.href = "/alltickets";
}

export default HomeContainer;

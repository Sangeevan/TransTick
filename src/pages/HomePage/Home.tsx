import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import HomeContainer from '../../components/HomeComponent/HomeContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage id="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <HomeContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

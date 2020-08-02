import { IonBackButton, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import React from 'react';
import HomeContainer from '../../components/HomeComponent/HomeContainer';
import MenuContainer from '../../components/MenuComponent/MenuContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage id="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButton slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MenuContainer />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContainer />
      </IonContent>
    </IonPage>
  );
};



export default Home;

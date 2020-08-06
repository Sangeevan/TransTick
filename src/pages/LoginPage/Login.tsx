import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import LoginContainer from '../../components/LoginComponent/LoginContainer';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage id="menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>TransTick</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <LoginContainer/> 
      </IonContent>
    </IonPage>
  );
};

export default Login;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import SignupContainer from '../../components/SignupComponent/SignupContainer';
import './Signup.css';

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <SignupContainer />
      </IonContent>
    </IonPage>
  );
};

export default Signup;

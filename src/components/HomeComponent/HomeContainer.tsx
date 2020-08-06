import { IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { addSharp } from 'ionicons/icons';
import React from 'react';
import './HomeContainer.css';

interface ContainerProps { }

const HomeContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent fullscreen>
      
      <div className="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/addticket">
          <IonIcon icon={addSharp} />
        </IonFabButton>
      </IonFab>
    
    </IonContent>
  );
};

export default HomeContainer;

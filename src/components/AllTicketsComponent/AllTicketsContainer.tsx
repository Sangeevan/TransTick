import { IonButton, IonCol, IonGrid, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonRow, IonThumbnail} from '@ionic/react';
import React from 'react';
import './AllTicketsContainer.css';

interface ContainerProps { }

const AllTicketsContainer: React.FC<ContainerProps> = () => {

const names = [{"key":"value1","key2":"value2","key3":"value3"},
                {"key":"valuea","key2":"valueb","key3":"valuec"},
                {"key":"valuea","key2":"valueb","key3":"valuec"},
                {"key":"valuea","key2":"valueb","key3":"valuec"}];

  return (
    <div>
      <IonList>
        {names.map(name => (
          <IonItem>
              <IonLabel>{name.key}</IonLabel>
              <IonLabel>{name.key2}</IonLabel>
              <IonLabel>{name.key3}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default AllTicketsContainer;

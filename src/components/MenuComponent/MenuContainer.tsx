import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import './MenuContainer.css';

export const MenuContainer: React.FC = () => {
  return(
        <IonMenu side="start" menuId="menu" contentId="menu">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>TransTick</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>Profile</IonItem>
                    <IonItem>My Tickets</IonItem>
                    <IonItem>Add Ticket</IonItem>
                    <IonItem>Home</IonItem>
                    <IonItem lines="none"></IonItem>
                    <IonItem lines="full"></IonItem>
                    <IonItem lines="none">Sign Out</IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default MenuContainer;
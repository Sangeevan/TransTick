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
                    <IonItem routerLink="/mytickets">My Tickets</IonItem>
                    <IonItem routerLink="/addticket">Add Ticket</IonItem>
                    <IonItem routerLink="/home">Home</IonItem>
                    <IonItem lines="none"></IonItem>
                    <IonItem lines="full"></IonItem>
                    <IonItem onClick={()=>logout()} lines="none">Sign Out</IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

function logout(){
    alert("Sign Out");
}

export default MenuContainer;
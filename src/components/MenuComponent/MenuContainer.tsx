import React, {useState} from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, folderOutline ,addCircleOutline, logOutOutline } from 'ionicons/icons'
import './MenuContainer.css';

export const MenuContainer: React.FC = () => {
    const name = useState('Sangeevan');
    return(
        <IonMenu side="start" menuId="menu" contentId="menu">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>TransTick</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem lines="full">
                        <IonThumbnail slot="start">
                            <IonImg src= 'https://miro.medium.com/max/3150/2*hTpk9HSXPH2QabMLpkO3iA.jpeg' />
                        </IonThumbnail>
                        <IonLabel>{name}</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/home">
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/mytickets">
                        <IonIcon icon={folderOutline} />
                        <IonLabel>My Tickets</IonLabel>
                    </IonItem>
                    <IonItem routerLink="/addticket" lines="none">
                        <IonIcon icon={addCircleOutline} />
                        <IonLabel>Add Ticket</IonLabel>
                    </IonItem>
                    <IonItem lines="full"></IonItem>
                    <IonItem onClick={()=>logout()} lines="none">
                        <IonIcon icon={logOutOutline} />
                        <IonLabel>Sign Out</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

function logout(){
    window.location.href = "/";
}

export default MenuContainer;

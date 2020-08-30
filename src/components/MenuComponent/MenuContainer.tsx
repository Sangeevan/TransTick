import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, folderOutline ,addCircleOutline, logOutOutline } from 'ionicons/icons'
import './MenuContainer.css';
import { menuController } from "@ionic/core";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from '../../toast';

export const MenuContainer: React.FC = () => {
    const history = useHistory();
    const userName = useSelector((state:any) => state.user.username);
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
                        <IonLabel>{userName}</IonLabel>
                    </IonItem>
                    <IonItem onClick={async () => await menuController.toggle()} routerLink="/home">
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem onClick={async () => await menuController.toggle()} routerLink="/mytickets">
                        <IonIcon icon={folderOutline} />
                        <IonLabel>My Tickets</IonLabel>
                    </IonItem>
                    <IonItem onClick={async () => await menuController.toggle()} routerLink="/addticket" lines="none">
                        <IonIcon icon={addCircleOutline} />
                        <IonLabel>Add Ticket</IonLabel>
                    </IonItem>
                    <IonItem lines="full"></IonItem>
                    <IonItem onClick={async () => {await menuController.toggle();logout(history,userName)}} lines="none">
                        <IonIcon icon={logOutOutline} />
                        <IonLabel>Sign Out</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

function logout(history:any,userName:string){
    history.push('/login');
    toast('Logout success. \n'+'Goodbye '+userName+'!');
}

export default MenuContainer;

import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonIcon, IonAlert } from '@ionic/react';
import { homeOutline, folderOutline ,addCircleOutline, logOutOutline } from 'ionicons/icons'
import './MenuContainer.css';
import { menuController } from "@ionic/core";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from '../../toast';
import { setLogOutState, setUserState } from '../../redux/action';

export const MenuContainer: React.FC = () => {
    const history = useHistory();
    const userName = useSelector((state:any) => state.user.username);
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);
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
                    <IonItem onClick={async () => {await menuController.toggle();setShowAlert(true)}} lines="none">
                        <IonIcon icon={logOutOutline} />
                        <IonLabel>Sign Out</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              cssClass='alert-box'
              header={'Confirm!'}
              message={'Do you want to <strong>Sign Out</strong>?'}
              buttons={[
                {
                  text: 'Cancel',
                  role: 'cancel'
                },
                {
                  text: 'Okay',
                  handler: () => {
                    logout(history,dispatch,userName)
                  }
                }
              ]}
            />
        </IonMenu>
    );
}

function logout(history:any,dispatch:any,userName:string){
    history.push('/login');
    toast('Logout success.\nGoodbye '+userName+'!');
    dispatch(setLogOutState(true));
    dispatch(setUserState(null));
    setTimeout(function() {
        dispatch(setLogOutState(false));
    }, 2500);
}

export default MenuContainer;

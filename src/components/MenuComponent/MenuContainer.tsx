import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonImg, IonLabel, IonIcon, IonAlert, IonAvatar } from '@ionic/react';
import { homeOutline, folderOutline ,addCircleOutline, logOutOutline } from 'ionicons/icons'
import './MenuContainer.css';
import { menuController } from "@ionic/core";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from '../../toast';
import { setLogOutState, setUserState } from '../../redux/action';

var img_url = "https://firebasestorage.googleapis.com/v0/b/transtick-45ff8.appspot.com/o/TransTick.jpg?alt=media&token=8d056d0f-08ba-40d9-94d4-a7998ed5933f";

export const MenuContainer: React.FC = () => {
    const history = useHistory();
    const userName = useSelector((state:any) => state.user.username);
    const userDetails = useSelector((state:any) => state.userDetails.details);
    if(userDetails){
        if(userDetails.user_img){
            img_url = userDetails.user_img;
        }
    }
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
                        <IonAvatar slot="start">
                            <IonImg src={img_url}/>
                        </IonAvatar>
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

import { IonButton, IonCol, IonGrid, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonRow, IonThumbnail} from '@ionic/react';
import React, { useState } from 'react';
import './LoginContainer.css';

interface ContainerProps { 
}

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];



const LoginContainer: React.FC<ContainerProps> = () => {

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  
  return (

    <div className="containerLogin">   
      <IonImg  className="img" src= "https://drive.google.com/u/0/uc?id=1l29nn-9GWjv8OYL09yZwQ5t3PBrpVerx&export=download"/>
      <IonList> 
          <IonItemDivider><a>Sign in to TransTick</a></IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={userName} onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
      </IonList>
      <IonButton id="loginbtn" className="login-button" expand="block" onClick={()=>login(userName, password)} >Sign in</IonButton>
      <br/>
      <div className="center">
      <p>Don't have an account?</p> 
      <strong><a href="/signup">Sign up</a></strong>
      </div>
    </div>
  );
};

function login( userName: string | undefined, password:string | undefined){
  let loginUser = false;
  if(userName=="sangeevan" && password=="1995"){
    loginUser = true;
  }
  if(loginUser){
    alert(["Email: "+ userName+ "\n"+ "Password: "+ password]);
    window.location.href = "/home";
  }
}

export default LoginContainer;

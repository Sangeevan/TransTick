import { IonButton, IonCol, IonGrid, IonImg, IonInput, IonItem, IonItemDivider, IonList, IonRow, IonThumbnail} from '@ionic/react';
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
      <IonImg  className="img" src= ""/>
         <br/>
      <IonList> 
          <IonItemDivider>Sign in to TransTick</IonItemDivider>
          <IonItem>
            <IonInput type="email" value={userName} placeholder="Email" onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
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
    window.location.href = "/home";
  }
}

export default LoginContainer;

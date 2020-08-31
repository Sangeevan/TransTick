import { IonButton, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import { setUserState } from '../../redux/action';
import './LoginContainer.css';
import { useHistory } from 'react-router-dom';
import {loginUser} from '../../firebaseConfig';
import { toast } from '../../toast';

interface ContainerProps { }

const LoginContainer: React.FC<ContainerProps> = () => {

  const history = useHistory();

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  
  return (
    <div className="containerLogin">
      <IonImg  className="img" src="/assets/images/transtick.png" />
      <IonList> 
          <IonItemDivider className="heading">Sign in to TransTick</IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput type="email" value={userName} onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
      </IonList>
      <IonButton id="loginbtn" className="login-button" expand="block" onClick={()=>login(history,dispatch,userName,password)}  >Sign in</IonButton>
      <br/>
      <div className="center">
      <p>Don't have an account?</p> 
      <strong><Link to="/signup">Sign up</Link></strong>
      </div>
    </div>
  );
};

async function login( history: any, dispatch:any, userName: string, password:string){
  let loginValidation = false;
  if(userName!=='' && password !==''){
    loginValidation = true;
  }else{
    toast('Username and password are required');
  }
  if(loginValidation){
    const res = await loginUser(userName,password);
    if(res){
      dispatch(setUserState(userName));
      toast('Login success.\nWelcome '+userName+'!');
      history.push('/home');
    }
  }
}

export default LoginContainer;

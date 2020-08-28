import { IonButton, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import { setUserState } from '../../redux/action';
import './LoginContainer.css';
import { useHistory } from 'react-router-dom';

interface ContainerProps { }

const LoginContainer: React.FC<ContainerProps> = () => {

  const history = useHistory();

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const dispatch = useDispatch();
  dispatch(setUserState(userName));
  
  return (

    <div className="containerLogin">
      <IonImg  className="img" src="/assets/images/transtick.png" />
      <IonList> 
          <IonItemDivider className="heading">Sign in to TransTick</IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={userName} onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
      </IonList>
      <IonButton id="loginbtn" className="login-button" expand="block" onClick={()=>login(history,userName,password)}  >Sign in</IonButton>
      <br/>
      <div className="center">
      <p>Don't have an account?</p> 
      <strong><Link to="/signup">Sign up</Link></strong>
      </div>
    </div>
  );
};

function login( history: any, userName: string | undefined, password:string | undefined){
  let loginUser = false;
  if(true){
    loginUser = true;
  }
  if(loginUser){
    alert(["Email: ", userName+ "\n", "Password: ", password]);
    history.push('/home');
  }
}

export default LoginContainer;

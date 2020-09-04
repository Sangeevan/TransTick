import { IonButton, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { setUserState, setUserDetailsState } from '../../redux/action';
import './LoginContainer.css';
import { useHistory } from 'react-router-dom';
import {getUser, loginUser} from '../../firebaseConfig';
import { toast } from '../../toast';

import {ClimbingBoxLoader, HashLoader} from 'react-spinners'
import { css } from "@emotion/core";

interface ContainerProps { }

const LoginContainer: React.FC<ContainerProps> = () => {

  const history = useHistory();

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [welcome, setWelcome] = useState<boolean>(true);

  const dispatch = useDispatch();

  const logout = useSelector((state:any) => state.logout.islogout);
  
  return (
    <div className="containerLogin">
      {welcome && !logout ? <div>
      <IonImg src="/assets/images/transtick.png" />
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
      <IonButton id="loginbtn" className="login-button" expand="block" onClick={()=>login(history,dispatch,setWelcome,userName,password)}  >Sign in</IonButton>
      <br/>
      <div className="center">
      <p>Don't have an account?</p> 
      <strong><Link to="/signup">Sign up</Link></strong>
      </div>
      </div> :
      <div className="container">
        {!welcome && 
          <div>
            <HashLoader 
              css={css`display: block;margin: 0 auto;`}
              size={150}
              color={"#123abc"}
              loading={!welcome}/>
            <h1>Welcome to <b>TransTick</b></h1>
          </div>
        }
        {logout && 
          <div>
            <ClimbingBoxLoader 
              css={css`display: block;margin: 0 auto;`}
              size={25}
              color={"#123abc"}
              loading={logout}/>
            <h1>Goodbye</h1>
          </div>
        }
      </div>}
    </div>
  );
};

async function login( history: any, dispatch:any,setWelcome:any, userName: string, password:string){
  let loginValidation = false;
  if(userName!=='' && password !==''){
    loginValidation = true;
  }else{
    toast('Username and password are required');
  }
  if(loginValidation){
    const res = await loginUser(userName,password);
    if(res){
      setWelcome(false);
      dispatch(setUserState(userName));
      toast('Login success.\nWelcome '+userName+'!');




      var userDetails = (await getUser(userName) && await getUser(userName)) || 'Anonymous';
      if(userDetails === 'Anonymous'){
        var noUserDetails = [{user_name:"User",user_img:""}];
        dispatch(setUserDetailsState(noUserDetails));
      }else{
        dispatch(setUserDetailsState(userDetails));
      }


      setTimeout(function() {
        history.push('/home');
        setWelcome(true);
      }, 2000);
    }
  }
}

export default LoginContainer;

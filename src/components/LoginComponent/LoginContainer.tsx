import { IonButton} from '@ionic/react';
import React from 'react';
import './LoginContainer.css';

interface ContainerProps { 
}

const LoginContainer: React.FC<ContainerProps> = () => {
  
  return (
    <div className="container">
      <IonButton id="loginbtn" className="login-button" expand="block" onClick={()=>login()} >Sign in</IonButton>
    </div>
  );
};

function login(){
  window.location.href = "/home";
}

export default LoginContainer;

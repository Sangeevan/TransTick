import { IonButton} from '@ionic/react';
import { History } from 'history';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './LoginContainer.css';

interface ContainerProps extends RouteComponentProps { }

const LoginContainer: React.FC<ContainerProps> = ({history}) => {
  return (
    <div className="container">
      <IonButton className="login-button" expand="block" onClick={()=>login(history)} >Block Button</IonButton>
    </div>
  );
};

function login(history: History<History.UnknownFacade>){
  alert("Wel Come");
}

export default LoginContainer;

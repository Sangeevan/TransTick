import { IonButton, IonInput, IonItem, IonItemDivider, IonList } from '@ionic/react';
import React, { useState } from 'react';
import './SignupContainer.css';

interface ContainerProps { }

const SignupContainer: React.FC<ContainerProps> = () => {

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [DOB, setDOB] = useState<string>();

  return (
    <div className="containerSignup">
      <IonList>
          <IonItem>
            <IonInput type="email" value={userName} placeholder="Email" onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" value={confirmPassword} placeholder="Confirm Password" onIonChange={e => setConfirmPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="number" value={phoneNumber} placeholder="Phone number" onIonChange={e => setPhoneNumber(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" value={address} placeholder="Address" onIonChange={e => setAddress(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" value={district} placeholder="District" onIonChange={e => setDistrict(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" value={DOB} placeholder="Date of birth" onIonChange={e => setDOB(e.detail.value!)}></IonInput>
          </IonItem>
      </IonList>
      <br/>
      <IonButton id="loginbtn" className="login-button" expand="block" onClick={()=>signup(userName, password, confirmPassword)} >Create account</IonButton>
      <br/>
      <div className="center">
      <p>Already have an account?</p> 
      <strong><a href="/login">Log in</a></strong>
      </div>    
    </div>
  );
};

function signup( userName: string | undefined, password:string | undefined,  confirmPassword:string | undefined){
  let signupUser = false;
  if(password==confirmPassword){
    signupUser = true;
  }
  if(signupUser){
    window.location.href = "/login";
  }
}

export default SignupContainer;

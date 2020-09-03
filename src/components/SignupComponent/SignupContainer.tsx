import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupContainer.css';
import { useHistory } from 'react-router-dom';
import {signupUser, addUser} from '../../firebaseConfig';
import { toast } from '../../toast';

interface ContainerProps { }

const SignupContainer: React.FC<ContainerProps> = () => {

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [file, setFile] = useState();

  const history = useHistory();

  var fileButton = document.getElementById('fileButton');
  fileButton?.addEventListener('change',function(e){
    if(e.target){
      setFile(e.target.files[0]);
    }
  })

  return (
    <div className="containerSignup">
      <IonList>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput type="text" value={userName} onIonChange={e => setUserName(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirm password</IonLabel>
            <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <div>Profile&nbsp;</div>
            <div>
              <input type="file"  id="fileButton"/>
            </div>
          </IonItem>
      </IonList>
      <br/>
      <IonButton id="signupbtn" className="signup-button" expand="block" onClick={()=>signup(history, userName, password, confirmPassword, file )} >Create account</IonButton>
      <br/>
      <div className="center">
      <p>Already have an account?</p> 
      <strong><Link to="/login">Log in</Link></strong>
      </div>    
    </div>
  );
};

async function signup( history:any, userName: string, password:string,  confirmPassword:string, file:any){
  let signupUserValidation = false;
  if(userName!=='' && password !==''){
    if(password===confirmPassword){
      if(file !== undefined){
        signupUserValidation = true;
      }else{
        toast('Please select a profile image');
      }
    }else{
      toast('Password and confirm password are not matched');
    }
  }else{
    toast('Username and password are required');
  }
  if(signupUserValidation){
    const res = await signupUser(userName,password);
    if(res){
      const id = Date.now();
      const resp = await addUser(id, userName, file);
      if(resp){
        toast('Account created successfully!');
        history.push('/login');
      }
    }
  }
}

export default SignupContainer;

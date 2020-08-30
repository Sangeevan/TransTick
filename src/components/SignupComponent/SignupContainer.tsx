import { IonButton, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
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
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [DOB, setDOB] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [district, setDistrict] = useState<string>('');

  const history = useHistory();

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
            <IonLabel position="floating">Phone number</IonLabel>
            <IonInput type="number" value={phoneNumber} onIonChange={e => setPhoneNumber(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Date of birth</IonLabel>
            <IonInput className="topMargin" type="date" value={DOB} onIonChange={e => setDOB(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Gender</IonLabel>
            <IonSelect value={gender} onIonChange={e => setGender(e.detail.value)}>
              <IonSelectOption value="Female">Female</IonSelectOption>
              <IonSelectOption value="Male">Male</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Address</IonLabel>
            <IonTextarea value={address} onIonChange={e => setAddress(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">District</IonLabel>
            <IonSelect value={district} onIonChange={e => setDistrict(e.detail.value)}>
              <IonSelectOption value="Ampara">Ampara</IonSelectOption>
              <IonSelectOption value="Anuradhapura">Anuradhapura</IonSelectOption>
              <IonSelectOption value="Badulla">Badulla</IonSelectOption>
              <IonSelectOption value="Batticaloa">Batticaloa</IonSelectOption>
              <IonSelectOption value="Colombo">Colombo</IonSelectOption>
              <IonSelectOption value="Galle">Galle</IonSelectOption>
              <IonSelectOption value="Gampaha">Gampaha</IonSelectOption>
              <IonSelectOption value="Hambantota">Hambantota</IonSelectOption>
              <IonSelectOption value="Jaffna">Jaffna</IonSelectOption>
              <IonSelectOption value="Kalutara">Kalutara</IonSelectOption>
              <IonSelectOption value="Kandy">Kandy</IonSelectOption>
              <IonSelectOption value="Kegalle">Kegalle</IonSelectOption>
              <IonSelectOption value="Kilinochchi">Kilinochchi</IonSelectOption>
              <IonSelectOption value="Kurunegala">Kurunegala</IonSelectOption>
              <IonSelectOption value="Mannar">Mannar</IonSelectOption>
              <IonSelectOption value="Matale">Matale</IonSelectOption>
              <IonSelectOption value="Matara">Matara</IonSelectOption>
              <IonSelectOption value="Moneragala">Moneragala</IonSelectOption>
              <IonSelectOption value="Mullaitivu">Mullaitivu</IonSelectOption>
              <IonSelectOption value="Nuwara Eliya">Nuwara Eliya</IonSelectOption>
              <IonSelectOption value="Polonnaruwa">Polonnaruwa</IonSelectOption>
              <IonSelectOption value="Puttalam">Puttalam</IonSelectOption>
              <IonSelectOption value="Ratnapura">Ratnapura</IonSelectOption>
              <IonSelectOption value="Trincomalee">Trincomalee</IonSelectOption>
              <IonSelectOption value="Vavuniya">Vavuniya</IonSelectOption>
            </IonSelect>
          </IonItem>
      </IonList>
      <br/>
      <IonButton id="signupbtn" className="signup-button" expand="block" onClick={()=>signup(history, userName, password, confirmPassword, phoneNumber, email, DOB, gender, address, district)} >Create account</IonButton>
      <br/>
      <div className="center">
      <p>Already have an account?</p> 
      <strong><Link to="/login">Log in</Link></strong>
      </div>    
    </div>
  );
};

async function signup( history:any, userName: string, password:string,  confirmPassword:string,  phoneNumber:string, email:string, DOB:string,  gender:string,  address:string,  district:string){
  let signupUserValidation = false;
  if(userName!='' && password !=''){
    if(password===confirmPassword){
      if(phoneNumber!='' && email!='' && DOB!='' && gender!='' && address!='' && district!=''){
        signupUserValidation = true;
      }else{
        toast('Please fill all fields');
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
      const resp = await addUser(id, userName, phoneNumber, email, DOB, gender, address, district);
      if(resp){
        toast('Account created successfully!');
        history.push('/login');
      }
    }
  }
}

export default SignupContainer;

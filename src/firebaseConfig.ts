import * as firebase from 'firebase'
import { toast } from './toast';

const config = {
    apiKey: "AIzaSyD8roBBqirzi4zFJZ6OKJuZWDnqomrd1aY",
    authDomain: "transtick-45ff8.firebaseapp.com",
    databaseURL: "https://transtick-45ff8.firebaseio.com",
    projectId: "transtick-45ff8",
    storageBucket: "transtick-45ff8.appspot.com",
    messagingSenderId: "655038879066",
    appId: "1:655038879066:web:2168720fb6a4d7dd9f4f63",
    measurementId: "G-14K672MKHR"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password:string){
    const email = `${username}@transtick.com`
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email,password);
        return true
    }catch(error){
        toast(error.message);
        return false
    }
}

export async function signupUser(username: string, password:string){
    const email = `${username}@transtick.com`
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password);
        return true
    }catch(error){
        toast(error.message);
        return false
    }
}
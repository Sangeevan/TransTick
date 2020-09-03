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

const database = firebase.database();
const storage = firebase.storage();

export async function loginUser(username: string, password:string){
    const email = `${username}@transtick.com`
    try{
        await firebase.auth().signInWithEmailAndPassword(email,password);
        return true
    }catch(error){
        toast(error.message);
        return false
    }
}

export async function signupUser(username: string, password:string){
    const email = `${username}@transtick.com`
    try{
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        return true
    }catch(error){
        toast(error.message);
        return false
    }
}

export async function addUser(id: number, userName: string, file:any){
    try{
        storage.ref('/users/'+userName).put(file).then(function(){
            var starsRef = storage.ref('/users/'+userName);
            starsRef.getDownloadURL().then(function(url) {
                database.ref('/users/'+userName).set({
                    id: id,
                    user_name: userName,
                    user_img: url
                });
              }).catch(
                  function(error){
                      console.log(error);
                  }
              );
        });
        return true
    }catch(error){
        toast(error.message);
        return false
    }
}

export async function getUser(userName: string){
    try{
        return firebase.database().ref('/users/'+userName).once('value').then(function(snapshot) {
            var userDetails = (snapshot.val() && snapshot.val()) || 'Anonymous';
            return userDetails;
        });
    }catch(error){
        toast(error.message);
        return false
    }
}

export async function addTicket(id: number, userName: string, eventName: string, eventDate: string, eventTime: string, eventVenue: string, eventType: string, eventDistrict: string, eventPrice: string, eventSeats:string, eventPersonName: string, eventPersonNumber: string, eventPersonEmail: string, eventExtraNotes: string, file:any){
    try{
        storage.ref('/tickets/'+id).put(file).then(function(){
            var starsRef = storage.ref('/tickets/'+id);
            starsRef.getDownloadURL().then(function(url) {
                database.ref('/tickets/'+eventType+'/'+eventDistrict+'/'+id).set({
                    id: id,
                    user_name: userName,
                    event_name: eventName,
                    event_date: eventDate,
                    event_time: eventTime,
                    event_venue: eventVenue,
                    event_type: eventType,
                    event_district: eventDistrict,
                    event_price: eventPrice,
                    event_seats: eventSeats,
                    event_person_name: eventPersonName,
                    event_person_number: eventPersonNumber,
                    event_person_email: eventPersonEmail,
                    event_extra_notes: eventExtraNotes,
                    ticket_img: url
                });
                database.ref('/users/'+userName+'/tickets'+'/'+id).set({
                    id: id,
                    user_name: userName,
                    event_name: eventName,
                    event_date: eventDate,
                    event_time: eventTime,
                    event_venue: eventVenue,
                    event_type: eventType,
                    event_district: eventDistrict,
                    event_price: eventPrice,
                    event_seats: eventSeats,
                    event_person_name: eventPersonName,
                    event_person_number: eventPersonNumber,
                    event_person_email: eventPersonEmail,
                    event_extra_notes: eventExtraNotes,
                    ticket_img: url
                });
              }).catch(
                  function(error){
                      console.log(error);
                  }
              );
        });
        return true
    }catch(error){
        toast(error.message);
        return false
    }
}

export async function getAllTickets(eventType:string, eventDistrict:string){
    try{
        return firebase.database().ref('/tickets/'+eventType+'/'+eventDistrict).once('value').then(function(snapshot) {
            var tickets = (snapshot.val() && snapshot.val()) || 'Anonymous';
            return tickets;
        });
    }catch(error){
        toast(error.message);
        return false
    }
}

export async function getMyTickets(userName:string){
    try{
        return firebase.database().ref('/users/'+userName+'/tickets').once('value').then(function(snapshot) {
            var mytickets = (snapshot.val() && snapshot.val()) || 'Anonymous';
            return mytickets;
        });
    }catch(error){
        toast(error.message);
        return false
    }
}

export async function deleteTicket(userName:string, id:string, eventType:string, eventDistrict:string){
    try{
        firebase.database().ref('/users/'+userName+'/tickets/'+id).remove();
        firebase.database().ref('/tickets/'+eventType+'/'+eventDistrict+'/'+id).remove();
        return true;
    }catch(error){
        toast(error.message);
        return false
    }
}
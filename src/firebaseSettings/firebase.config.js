import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp({
    apiKey: "AIzaSyAFCO70osxg0GMdPoovB41MhMNDLxnNnEg",
    authDomain: "cute-cutting.firebaseapp.com",
    projectId: "cute-cutting",
    storageBucket: "cute-cutting.appspot.com",
    messagingSenderId: "541985989944",
    appId: "1:541985989944:web:198253cce809e1919e0dcd",
})

export const auth = app.auth()

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB-F09q3jlKZ2ke6bLxvwgM1Jsplw4uKik",
    authDomain: "todo-app-fcf56.firebaseapp.com",
    projectId: "todo-app-fcf56",
    storageBucket:"todo-app-fcf56.appspot.com" ,
    messagingSenderId: "851309727796",
    appId: "1:851309727796:web:a77219bbb2cff7abc57a61",
    measurementId: "G-GMZ9GVCV86"
};

export const app = initializeApp(firebaseConfig);
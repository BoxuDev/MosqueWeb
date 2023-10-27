import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBC7aUv0arH0Q-WSRkD6gl8UzjcuX138Vs",
    authDomain: "dublinmec-a5789.firebaseapp.com",
    projectId: "dublinmec-a5789",
    storageBucket: "dublinmec-a5789.appspot.com",
    messagingSenderId: "398045927683",
    appId: "1:398045927683:web:f8be0f1c02fb5184b53136"
};

initializeApp(firebaseConfig);
export const auth = getAuth(initializeApp(firebaseConfig));

const db = getFirestore();
const colRef = collection(db, "posts");

export const getData = () =>  {
    getDocs(colRef).then((snapshot) => {
        let posts = [];
        snapshot.docs.forEach((doc) => {
            posts.push({ ...doc.data(), id: doc.id });
        });
        console.log(posts);
    }).catch();
}

export const postData = (data) => {
    const finalData = {
        id: Math.random(),
        title: data.title,
        message: data.message,
        picture: data.picture ?? "Not Found",
        date: Date.now()
    }
    addDoc(colRef, finalData).then().catch();
}
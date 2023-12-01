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

export const getData = async () =>  {
    let postsData = [];
    await getDocs(colRef).then((snapshot) => {
        let posts = [];
        snapshot.docs.forEach((doc) => {
            posts.push({ ...doc.data(), id: doc.id });
        });
        postsData = posts;
    }).catch();
    return postsData;
}

export const postData = async (data) => {
    const finalData = {
        id: Math.random(),
        title: data.title,
        message: data.message,
        picture: data.image ?? "Not Found",
        date: Date.now()
    }
    await addDoc(colRef, finalData).then().catch();
}
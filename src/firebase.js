import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"

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

export const db = getFirestore();
const colPostRef = collection(db, "posts");
const colSliderRef = collection(db, "slider");
const colGalleryRef = collection(db, "gallery");

export const getPostData = async () => {
    let postsData = [];
    await getDocs(colPostRef).then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
        });
        postsData = data;
    }).catch();
    return postsData;
}

export const getSliderData = async () => {
    let sliderData = [];
    await getDocs(colSliderRef).then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
        });
        sliderData = data;
    }).catch();
    return sliderData;
}

export const getGalleryData = async () => {
    let sliderData = [];
    await getDocs(colGalleryRef).then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
        });
        sliderData = data;
    }).catch();
    return sliderData;
}

export const addPostData = async (data) => {
    const finalData = {
        title: data.title,
        message: data.message,
        picture: data.picture,
        date: new Date().toISOString()
    }
    await addDoc(colPostRef, finalData).then().catch();
}

export const addSliderData = async (data) => {
    const finalData = {
        ...data,
        date: new Date().toISOString()
    }
    await addDoc(colSliderRef, finalData).then().catch();
}

export const addGalleryData = async (data) => {
    const finalData = {
        date: new Date().toISOString(),
        fileName: data.fileName,
        image: data.image
    }
    await addDoc(colGalleryRef, finalData).then().catch();
}

export const deletePostData = async (id) => {
    const docRef = doc(db, "posts", id);
    deleteDoc(docRef);
}

export const deleteSliderData = async (id) => {
    const docRef = doc(db, "slider", id);
    deleteDoc(docRef);
}

export const deleteGalleryData = async (id) => {
    const docRef = doc(db, "gallery", id);
    deleteDoc(docRef);
}
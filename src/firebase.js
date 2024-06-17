import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"
import imgBackString from "./components/Utils/imageBackExport";

//** Firebase - PRODUCTION */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

export const auth = getAuth(initializeApp(firebaseConfig));

const db = getFirestore();
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
    postsData.forEach((post) => {
        post.date = post.date.toDate().toUTCString();
    });
    postsData = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
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
    sliderData.forEach((slider) => {
        slider.date = slider.date.toDate().toUTCString();
    });
    sliderData = sliderData.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sliderData;
}

export const getGalleryData = async () => {
    let galleryData = [];
    await getDocs(colGalleryRef).then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
        });
        galleryData = data;
    }).catch();
    galleryData.forEach((gallery) => {
        gallery.date = gallery.date.toDate().toUTCString();
    });
    galleryData = galleryData.sort((a, b) => new Date(b.date) - new Date(a.date));
    return galleryData;
}

export const addPostData = async (data) => {
    const finalData = {
        title: data.title,
        message: data.message ?? "",
        picture: data.picture ?? imgBackString,
        date: new Date()
    }
    await addDoc(colPostRef, finalData).then().catch();
}

export const addSliderData = async (data) => {
    const finalData = {
        ...data,
        date: new Date()
    }
    await addDoc(colSliderRef, finalData).then().catch();
}

export const addGalleryData = async (data) => {
    const finalData = {
        date: new Date(),
        fileName: data.fileName ?? "Invalid File Name",
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
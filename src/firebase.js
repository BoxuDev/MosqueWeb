import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"
import { Image } from "antd";

//** Test Firebase */
const firebaseConfig = {
    apiKey: "AIzaSyBC7aUv0arH0Q-WSRkD6gl8UzjcuX138Vs",
    authDomain: "dublinmec-a5789.firebaseapp.com",
    projectId: "dublinmec-a5789",
    storageBucket: "dublinmec-a5789.appspot.com",
    messagingSenderId: "398045927683",
    appId: "1:398045927683:web:f8be0f1c02fb5184b53136"
};

//** DublinMecid Firebase - PRODUCTION */
// const firebaseConfig = {
//     apiKey: "AIzaSyDTCgGvYNkOImwkmzO1t502a4vu4p5ztDE",
//     authDomain: "dublin-mecid.firebaseapp.com",
//     projectId: "dublin-mecid",
//     storageBucket: "dublin-mecid.appspot.com",
//     messagingSenderId: "317256112312",
//     appId: "1:317256112312:web:b252693933d951a3b5fc4d",
//     measurementId: "G-WSKQQ92GG7"
// };

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
        message: data.message,
        picture: data.picture,
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
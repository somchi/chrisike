import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  QuerySnapshot,
} from 'firebase/firestore';
import { app } from './friebase';
import { Design, Review, Video } from '../types';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const db = getFirestore(app);
const storage = getStorage(app);

export const getVideos = async () => {
  try {
    const response: QuerySnapshot = await getDocs(collection(db, 'videos'));
    return response;
  } catch (error) {
    return;
  }
};

export const getDesigns = async () => {
  try {
    const response: QuerySnapshot = await getDocs(collection(db, 'designs'));
    return response;
  } catch (error) {
    return;
  }
};

export const getReviews = async () => {
  try {
    const response: QuerySnapshot = await getDocs(collection(db, 'reviews'));
    return response;
  } catch (error) {
    return;
  }
};

export const addVideo = async (data: Video) => {
  try {
    let docRef = null;
    const time = Date.now();
    const videosRef = ref(storage, `videos/${time}.mp4`);
    const upload = await uploadBytes(videosRef, data.video);
    const imgUrl = `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_StorageBucket}/o/videos%2F${videosRef.name}?alt=media`;
    if (upload) {
      const payload = { ...data, video: imgUrl };
      docRef = await addDoc(collection(db, 'videos'), payload);
    }
    return docRef;
  } catch (e) {}
};

export const addDesigns = async (data: Design) => {
  try {
    let docRef = null;
    const time = Date.now();
    const designsRef = ref(storage, `designs/${time}.png`);
    const upload = await uploadBytes(designsRef, data.img);
    const imgUrl = `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_StorageBucket}/o/designs%2F${designsRef.name}?alt=media`;
    if (upload) {
      const payload = { ...data, img: imgUrl };
      docRef = await addDoc(collection(db, 'designs'), payload);
    }

    return docRef;
  } catch (e) {}
};

export const addReviews = async (data: Review) => {
  try {
    let docRef = null;
    const time = Date.now();
    const reviewRef = ref(storage, `reviews/${time}.png`);
    const upload = await uploadBytes(reviewRef, data.img);
    const imgUrl = `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_StorageBucket}/o/reviews%2F${reviewRef.name}?alt=media`;
    if (upload) {
      const payload = { ...data, img: imgUrl };
      docRef = await addDoc(collection(db, 'reviews'), payload);
    }

    return docRef;
  } catch (e) {}
};

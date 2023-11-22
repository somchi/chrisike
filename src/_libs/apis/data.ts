import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  QuerySnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { app } from './friebase';
import {
  CreateDesign,
  CreateReview,
  CreateVideo,
  Design,
  Review,
  Video,
} from '../types';
import { getStorage, ref, uploadBytes, deleteObject } from 'firebase/storage';

const db = getFirestore(app);
const storage = getStorage(app);

export const getVideos = async () => {
  try {
    const response: QuerySnapshot = await getDocs(collection(db, 'videos'));
    const data = response?.docs.map((item) => {
      return { id: item.id, ...item.data() };
    });
    return data;
  } catch (error) {
    return;
  }
};

export const getDesigns = async () => {
  try {
    const response: QuerySnapshot = await getDocs(collection(db, 'designs'));
    const data = response?.docs.map((item) => {
      return { id: item.id, ...item.data() };
    });
    return data;
  } catch (error) {
    return;
  }
};

export const getReviews = async () => {
  try {
    const response: QuerySnapshot = await getDocs(collection(db, 'reviews'));
    const data = response?.docs.map((item) => {
      return { id: item.id, ...item.data() };
    });
    return data;
  } catch (error) {
    return;
  }
};

export const addVideo = async (data: CreateVideo) => {
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

export const addDesigns = async (data: CreateDesign) => {
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

export const addReviews = async (data: CreateReview) => {
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

export const deleteVideo = async (data: Video) => {
  try {
    const file = data.video.split('videos')[1];
    const removeExtra = file.split('?')[0].slice(3);
    const filePath = `videos/${removeExtra}`;
    const videoRef = ref(storage, filePath);
    const id: string = data.id;
    const docRef = await deleteDoc(doc(db, 'videos', id));
    await deleteObject(videoRef);
    return docRef;
  } catch (e) {}
};

export const deleteDesign = async (data: Design) => {
  try {
    const file = data.img.split('designs')[1];
    const removeExtra = file.split('?')[0].slice(3);
    const filePath = `designs/${removeExtra}`;
    const designRef = ref(storage, filePath);
    const id: string = data.id;
    const docRef = await deleteDoc(doc(db, 'designs', id));
    await deleteObject(designRef);
    return docRef;
  } catch (e) {}
};

export const deleteReview = async (data: Review) => {
  try {
    const file = data.img.split('reviews')[1];
    const removeExtra = file.split('?')[0].slice(3);
    const filePath = `reviews/${removeExtra}`;
    const reviewRef = ref(storage, filePath);
    const id: string = data.id;
    const docRef = await deleteDoc(doc(db, 'reviews', id));
    await deleteObject(reviewRef);
    return docRef;
  } catch (e) {}
};

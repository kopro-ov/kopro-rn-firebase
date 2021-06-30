import * as firebase from 'firebase';
import 'firebase/firestore';
import config from '../../firebase.json';

const app = firebase.initializeApp(config);

const Auth = app.auth();

export const DB = firebase.firestore();

export const createChannel = async ({title, description}) => {
  const newChannelRef = DB.collection('channels').doc();
  const id = newChannelRef.id;
  const newChannel = {
    id,
    title,
    description,
    createAt: Date.now(),
  };
  await newChannelRef.set(newChannel);
  return id;
};

export const createMessage = async ({channelId, message}) => {
  return await DB.collection('channels')
    .doc(channelId)
    .collection('messages')
    .doc(message._id)
    .set({
      message,
      createAt: Date.now(),
    });
};

export const login = async ({email, password}) => {
  const {user} = await Auth.signInWithEmailAndPassword(email, password);
  return user;
};

export const signup = async ({email, password}) => {
  const {user} = await Auth.createUserWithEmailAndPassword(email, password);
  return user;
};

export const logou = async () => {
  return await Auth.signOut();
};

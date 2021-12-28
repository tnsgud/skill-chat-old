import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const {
    REACT_APP_FIREBASE_APIKEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECTID,
    REACT_APP_FIREBASE_STORAGEBUCKET,
    REACT_APP_FIREBASE_MESSAGINGSENDERID,
    REACT_APP_FIREBASE_APPID,
    REACT_APP_FIREBASE_MEASUREMENTID
} = process.env

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_APIKEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECTID,
    storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: REACT_APP_FIREBASE_APPID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
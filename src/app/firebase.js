import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import {
  setPersistence,
  signInWithPopup,
  browserLocalPersistence,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyD7HF52EQJKJlrSPQ3rP8C7npAxDxrWv5g",
  authDomain: "build-with-ai-vizag.firebaseapp.com",
  projectId: "build-with-ai-vizag",
  storageBucket: "build-with-ai-vizag.appspot.com",
  messagingSenderId: "358168170431",
  appId: "1:358168170431:web:97c3c110fc066b74301b0a",
  measurementId: "G-NP39L549X0",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.useDeviceLanguage();
(async () => {
  await setPersistence(auth, browserLocalPersistence);
})();
function signInWithGoogleAsPopup(onSuccess, onFailure) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential === null) {
        alert("Error signing in");
        return;
      }
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      onSuccess(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      onFailure(errorMessage);
      // ...
    });
}
const db = getFirestore(app);

export { db, auth, signInWithGoogleAsPopup };

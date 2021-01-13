import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-t-8PFVR7stxfdPPhqw9j7in2QARz4Wg",
  authDomain: "business-card-maker-3fb16.firebaseapp.com",
  databaseURL: "https://business-card-maker-3fb16-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-3fb16",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const GithubProvider = new firebase.auth.GithubAuthProvider();
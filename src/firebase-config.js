/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDJB_1RZpxksO2x3LQhC4y4QDrf0QRuv_Y",
  authDomain: "friendly-chat-b0616.firebaseapp.com",
  projectId: "friendly-chat-b0616",
  storageBucket: "friendly-chat-b0616.appspot.com",
  messagingSenderId: "558829560839",
  appId: "1:558829560839:web:7a320a70f5bd44e08476a2"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
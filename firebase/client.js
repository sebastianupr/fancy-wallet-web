import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"

// TODO: Move this values to env config
const firebaseConfig = {
  apiKey: "AIzaSyAfEzJ3RrxF8tB24PzZtXIdUW9o_ZZPSv8",
  authDomain: "fancy-wallet.firebaseapp.com",
  projectId: "fancy-wallet",
  storageBucket: "fancy-wallet.appspot.com",
  messagingSenderId: "889433540093",
  appId: "1:889433540093:web:0b5c48f1ab736fd1b64594",
  measurementId: "G-ZBH9VESWEC"
}

// Initialize Firebase (singleton)
export const app = initializeApp(firebaseConfig)
// export const analytics = getAnalytics(app)

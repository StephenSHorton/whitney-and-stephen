import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAXgz14T-zmFjnsoPOIgTtnmyaLJUmqPYQ",
	authDomain: "whitney-and-stephen.firebaseapp.com",
	projectId: "whitney-and-stephen",
	storageBucket: "whitney-and-stephen.appspot.com",
	messagingSenderId: "343819032334",
	appId: "1:343819032334:web:1b75eb8260cf630c69e95f",
	measurementId: "G-GCJXSBH8CG",
};

const app = initializeApp(firebaseConfig);
export default app;

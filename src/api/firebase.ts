import app from "config/firebaseConfig";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

enum Collection {
	Messages = "Messages",
}

const db = getFirestore(app);
export const Collections = {
	Messages: collection(db, Collection.Messages),
};

export const getMessages = () => getDocs(Collections.Messages);
export const createMessage = (doc: any) => addDoc(Collections.Messages, doc);

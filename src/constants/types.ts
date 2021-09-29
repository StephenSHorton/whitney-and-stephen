import { collection, FieldValue } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export type ExampleDoc = {
  id: string;
  name: string;
  previewImage: string;
  quantity: number;
  tags: string[];
  createdAt: FieldValue;
  updatedAt: FieldValue;
};

export const Collections = {
  ExampleCollection: collection(db, "ExampleCollection"),
};

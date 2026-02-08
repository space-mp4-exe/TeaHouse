import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    type User,
  } from "firebase/auth";
  import { FirebaseError } from "firebase/app";
  import { auth } from "./firebase/firebase";
  
//signup
  export const registerUser = async (email: string, password: string): Promise<User> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      throw new Error(firebaseError.message);
    }
  };
  
  //login
  export const loginUser = async (email: string, password: string): Promise<User> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      throw new Error(firebaseError.message);
    }
  };


  
  export const logoutUser = async (): Promise<void> => {
    await signOut(auth);
  };
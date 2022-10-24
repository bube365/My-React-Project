import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const db = getFirestore();

export const createUser = async (userAuth, additionalInformation = {}) => {
  const UserRef = doc(db, "customers", userAuth.uid);

  const userSnapShot = await getDoc(UserRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(UserRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return UserRef;
};

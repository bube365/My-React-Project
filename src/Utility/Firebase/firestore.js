import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const db = getFirestore();

export const createUser = async (userAuth) => {
  const UserRef = doc(db, "customers", userAuth.uid);
  console.log(UserRef);

  const userSnapShot = await getDoc(UserRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(UserRef, { displayName, email, createdAt });
    } catch (error) {
      console.error(error);
    }
  }

  return UserRef;
};

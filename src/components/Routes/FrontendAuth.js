import { usersignInWithPopup } from "../../Utility/Firebase/firbase";
import { createUser } from "../../Utility/Firebase/firestore";

export const LogGoogleUser = async () => {
  const { user } = await usersignInWithPopup();
  createUser(user);
};

import React from "react";
import { usersignInWithPopup } from "../../Utility/Firebase/firbase";
import { createUser } from "../../Utility/Firebase/firestore";

export const SignIn = () => {
  const LogGoogleUser = async () => {
    const { user } = await usersignInWithPopup();
    createUser(user);
  };
  return (
    <div>
      <h2>i'm Sign in page</h2>
      <button onClick={LogGoogleUser}>Sign In with Google</button>
    </div>
  );
};

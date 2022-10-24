import React, { useState } from "react";
import { LogGoogleUser } from "./FrontendAuth";
import { createUserWithEmailandPassword } from "../../Utility/Firebase/firbase";
import { createUser } from "../../Utility/Firebase/firestore";

const defaultField = {
  displayName: "displayName",
  email: "mike@gmail.com",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const [inputField, setInputField] = useState(defaultField);
  const { displayName, email, password, confirmPassword } = inputField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputField({ ...inputField, [name]: value });
  };

  const resetField = () => {
    setInputField(defaultField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("incorrent password. Pls confirm your password");
      return;
    }

    try {
      const { user } = await createUserWithEmailandPassword(email, password);
      await createUser(user, { displayName });
      resetField();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Email already exist");
        return;
      }
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col  items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  w-[80%] sm:w-[30%] py-12"
      >
        <label htmlFor="displayName">Name:</label>
        <input
          id="displayName"
          type="text"
          required
          className="border border-t-0 border-x-0 border-nav"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />{" "}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required
          className="border border-t-0 border-x-0 border-nav"
          name="email"
          onChange={handleChange}
          value={email}
        />{" "}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          required
          className="border border-t-0 border-x-0 border-nav"
          onChange={handleChange}
          name="password"
          value={password}
        />{" "}
        <br />
        <label htmlFor="ConfirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          required
          className="border border-t-0 border-x-0 border-nav"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit" className="bg-nav text-white py-1 mt-2">
          SignUp
        </button>
      </form>
      <h2 className="text-[18px]">or</h2>
      <button onClick={LogGoogleUser} className="border border-nav px-12">
        Sign In with Google
      </button>
    </div>
  );
};

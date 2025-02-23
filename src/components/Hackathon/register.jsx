import React, { useState } from "react";
// import { LogGoogleUser } from "./FrontendAuth";
// import { createUserWithEmailandPassword } from "../../Utility/Firebase/firbase";
// import { createUser } from "../../Utility/Firebase/firestore";
// import { navigate } from "@reach/router";

const defaultField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  return (
    <div className="flex flex-col  items-center">
      <form
        onSubmit={() => {}}
        className="flex flex-col  w-[80%] sm:w-[30%] py-12"
      >
        <label htmlFor="displayName">Name:</label>
        <input
          id="displayName"
          type="text"
          required
          className="border border-t-0 border-x-0 border-nav"
          onChange={() => {}}
          name="displayName"
          value={"HH"}
        />{" "}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required
          className="border border-t-0 border-x-0 border-nav"
          name="email"
          onChange={() => {}}
          value={"email"}
        />{" "}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          required
          className="border border-t-0 border-x-0 border-nav"
          onChange={() => {}}
          name="password"
          value={"password"}
        />{" "}
        <br />
        <label htmlFor="ConfirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          required
          className="border border-t-0 border-x-0 border-nav"
          onChange={() => {}}
          name="confirmPassword"
          value={"confirmPassword"}
        />
        <button type="submit" className="bg-nav text-white py-1 mt-2">
          SignUp
        </button>
      </form>
    </div>
  );
};

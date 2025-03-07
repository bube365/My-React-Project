import React, { useState } from "react";
import { LogGoogleUser } from "./FrontendAuth";
import { SignInUsersWithEmailandPassword } from "../../Utility/Firebase/firbase";
import { Link, useNavigate, useLocation } from "react-router-dom";

const defaultField = {
  email: "mike@gmail.com",
  password: "",
};

export const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [inputField, setInputField] = useState("");
  const { email, password } = inputField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputField({ ...inputField, [name]: value });
  };

  const resetField = () => {
    setInputField(defaultField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await SignInUsersWithEmailandPassword(email, password);
      console.log(response);
      resetField();
      navigate(from, { replace: true });

      // /dashboard
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password, pls enter correct passsword");
          break;

        case "auth/user-not-found":
          alert("No associated user with this email");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <div className="flex flex-col  items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  w-[80%] sm:w-[30%] py-12"
      >
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required
          className="border border-t-0 border-x-0 border-nav outline-none"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="Enter your Email"
        />{" "}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          required
          className="border border-t-0 border-x-0 border-nav outline-none"
          onChange={handleChange}
          name="password"
          value={password}
          placeholder="Enter your password"
        />
        <button type="submit" className="bg-nav text-white py-4 mt-10 ">
          Continue
        </button>
      </form>
      <h2 className="text-[18px]">or</h2>
      <button onClick={LogGoogleUser} className="border border-nav px-12">
        Sign In with Google
      </button>
    </div>
  );
};

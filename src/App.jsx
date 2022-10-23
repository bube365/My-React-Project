import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import LandingPage from "./components/Home/LandingPage.jsx";
import { SignIn } from "./components/Routes/SignIn.jsx";
import { SignUp } from "./components/Routes/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

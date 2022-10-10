import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import LandingPage from "./components/Home/LandingPage.jsx";
import { Signin } from "./components/Routes/Sign-in.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />} />
          <Route path="sign-in" element={<Signin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

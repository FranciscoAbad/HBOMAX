import React from "react";
import "./assets/global.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
//import { Landing } from "./pages/Landing";
import { Theme } from "./utils/GlobalInterfaces";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

import { Home } from "./pages/Home";
import { ProfilePicker } from "./pages/ProfilePicker";

const theme: Theme = {
  colors: {
    blue: "#1DA1F2",
    black: "#14171a",
    darkGray: "#657786",
    gray: "#AAB8C2",
    lightGray: "#E1E8ED",
    white: "#f5f8fa",
    error: "red",
  },
};

const GlobalStyle = createGlobalStyle`
*{
  font-family:'Gilroy', sans-serif;
  font-weight:500;
  margin:0;
  padding:0;
}
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile/select" element={<ProfilePicker />} />
      </Routes>
    </ThemeProvider>
  );
};

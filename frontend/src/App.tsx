import React from "react";
import "./assets/global.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
//import { Landing } from "./pages/Landing";
import { Theme } from "./utils/GlobalInterfaces";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

import { ProfilePicker } from "./pages/ProfilePicker";
import { ProfileCreate } from "./pages/ProfileCreate";
import { ProfileEditor } from "./features/profile/components/ProfileEditor/ProfileEditor";
import { ProfilePicturePicker } from "./pages/ProfilePicturePicker";
import { Feed } from "./pages/Feed";
import { Title } from "./pages/Title";
import { FeedFilter } from "./pages/FeedFilter";
import { Movies } from "./pages/Movies";
import { Series } from "./pages/Series";
import { Account } from "./pages/Account";
import { ProtectedRoute } from "./components/AuthWrapper/ProtectedRoute";
import { useCheckToken } from "./components/AuthWrapper/checkToken";
import { AccountEdit } from "./pages/AccountEdit";

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
  font-family: "Source Sans 3", sans-serif;
  font-weight:500;
  margin:0;
  padding:0;
}
`;

/*  */

export const App = () => {
  const { tokenValid, isFetching } = useCheckToken();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Feed />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/select" element={<ProfilePicker />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile/editor/*" element={<ProfileEditor />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/profile/adult/character/select"
            element={<ProfilePicturePicker />}
          />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/account/edit/email" element={<AccountEdit />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/tv-shows" element={<Series />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/genre/:genre" element={<FeedFilter />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/title/:type/:id" element={<Title />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

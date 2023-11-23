import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getUserByToken, setToken } from "../redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const state = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [jwt, setJwt, removeJwt] = useLocalStorage("token", "");
  useEffect(() => {
    console.log("state -->" + state.token);
    if (jwt !== "" && state.token !== "") {
      console.log("there is something");
      console.log(state.token);
      dispatch(getUserByToken(state.token));
    } else if (jwt === "" && state.token !== "") {
      setJwt(state.token);
    } else if (jwt !== "" && state.token === "") {
      dispatch(setToken(jwt));
      console.log("dispattchchhechaech");
    } else {
      navigate("/");
    }
  }, [state.token]);

  return <div className="home"></div>;
};

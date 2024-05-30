import React, { useEffect, useState } from "react";
import axios from "axios";
import { RootState } from "../redux/Store";
import { useSelector } from "react-redux";

export const useMakeView = (id: string) => {
  const userToken = useSelector((state: RootState) => state.user.token);
  useEffect(() => {
    axios
      .post(
        `http://localhost:8080/view/add/title/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          console.error("Conflict error:", error.response.data);
        } else {
          console.error("Error:", error.message);
        }
      });
  }, [id]);
};

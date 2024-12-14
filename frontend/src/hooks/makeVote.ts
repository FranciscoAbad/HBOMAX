import React, { useEffect, useState } from "react";
import axios from "axios";
import { RootState } from "../redux/Store";
import { useSelector } from "react-redux";

export const makeVote = (id: number, rating: number, token: string) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/vote/title/${id}/rating/${rating}F`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
};

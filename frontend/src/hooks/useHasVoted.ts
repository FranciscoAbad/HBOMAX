import React, { useEffect, useState } from "react";
import { FullTitle } from "../utils/GlobalInterfaces";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

export const useHasVoted = (id: number) => {
  const [rating, setRating] = useState<number>(0);
  const token = useSelector((state: RootState) => state.user.token);
  useEffect(() => {
    axios
      .get<number>(`${process.env.REACT_APP_API_URL}/vote/get/title/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRating(response.data);
      });
  }, [id]);

  return rating;
};

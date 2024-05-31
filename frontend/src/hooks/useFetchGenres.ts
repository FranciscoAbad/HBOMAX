import React, { useEffect, useState } from "react";
import { Genre } from "../utils/GlobalInterfaces";
import axios from "axios";

export const useFetchGenres = () => {
  const [data, setData] = useState<Genre[]>([]);
  const [isFetchig, setIsFetching] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get<Genre[]>(`http://localhost:8080/genre/all`)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetchig };
};

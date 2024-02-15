import React, { useEffect, useState } from "react";
import { FullTitle } from "../utils/GlobalInterfaces";
import axios from "axios";

export const useFetchFullTitle = (id: string) => {
  const [title, setTitle] = useState<FullTitle>();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get<FullTitle>(`http://localhost:8080/title/id/${id}`)
      .then((response) => {
        setTitle(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [id]);

  return { title, isFetching };
};

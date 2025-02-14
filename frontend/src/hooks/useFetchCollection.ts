import React, { useEffect, useState } from "react";
import { Collection } from "../utils/GlobalInterfaces";
import axios from "axios";

export const useFetchCollection = (collectionName: string) => {
  const [collection, setCollection] = useState<Collection>();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get<Collection>(
        `${process.env.REACT_APP_API_URL}/collection/get/${collectionName}`
      )
      .then((response) => {
        setCollection(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [collectionName]);

  return { collection, isFetching };
};

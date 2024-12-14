import React, { useEffect, useState } from "react";
import { TitleDTO } from "../utils/GlobalInterfaces";
import axios from "axios";

interface UseFetchTitlesProps {
  fetchUrl: string;
}

export const useFetchTitles = (props: UseFetchTitlesProps) => {
  const [data, setData] = useState<TitleDTO[]>([]);
  const [isFetchig, setIsFetching] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get<TitleDTO[]>(`${process.env.REACT_APP_API_URL}/${props.fetchUrl}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [props.fetchUrl]);

  return { data, isFetchig };
};

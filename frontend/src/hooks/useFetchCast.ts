import React, { useEffect, useState } from "react";
import { Cast, TitleDTO } from "../utils/GlobalInterfaces";
import axios from "axios";

interface UseFetchCastProps {
  fetchUrl: string;
}

export const useFetchCast = (props: UseFetchCastProps) => {
  const [cast, setCast] = useState<Cast[]>([]);
  const [isFetchingCast, setIsFetchingCast] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get<Cast[]>(`${process.env.REACT_APP_API_URL}/${props.fetchUrl}`)
      .then((response) => {
        setCast(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsFetchingCast(false);
      });
  }, [props.fetchUrl]);

  return { cast, isFetchingCast };
};

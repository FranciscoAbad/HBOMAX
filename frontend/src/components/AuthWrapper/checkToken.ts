import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/Store";
import { getUserByToken } from "../../redux/Slices/UserSlice";

export const useCheckToken = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.token);
  const dispatch: AppDispatch = useDispatch();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [tokenValid, setTokenValid] = useState<boolean>(false);

  useEffect(() => {
    console.log(tokenValid);
    dispatch(getUserByToken(isLoggedIn))
      .then(() => setTokenValid(true))
      .catch(() => setTokenValid(false))
      .finally(() => setIsFetching(false));
  }, []);

  return { tokenValid, isFetching };
};

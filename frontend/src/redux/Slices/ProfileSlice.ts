import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/GlobalInterfaces";
import axios from "axios";
import { Profile } from "../../utils/GlobalInterfaces";

interface ProfileSliceState {
  profiles: Profile[];
  selectedProfile: Profile | null;
  loadingProfiles: boolean;
  error: boolean;
}

const initialState: ProfileSliceState = {
  profiles: [],
  selectedProfile: null,
  loadingProfiles: false,
  error: false,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = ProfileSlice.actions;

export default ProfileSlice.reducer;

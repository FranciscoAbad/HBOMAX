import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/GlobalInterfaces";
import axios from "axios";
import { Profile } from "../../utils/GlobalInterfaces";

interface AddProfile {
  name: string;
  token: string;
}

interface ProfileSliceState {
  profiles: Profile[];
  selectedProfile: Profile | null;
  loadingProfiles: boolean;
  editingProfile: Profile | null;
  error: boolean;
  edit: boolean;
}

interface UpdateProfilePicture {
  profileId: number;
  imageId: number;
}

const initialState: ProfileSliceState = {
  profiles: [],
  selectedProfile: null,
  editingProfile: null,
  loadingProfiles: false,
  error: false,
  edit: false,
};

export const addProfile = createAsyncThunk(
  "profile/add",
  async (body: AddProfile, thunkApi) => {
    try {
      const req = await axios.post(
        `http://localhost:8080/user/profile/add/${body.name}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${body.token}`,
          },
        }
      );
      return await req.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const editProfile = createAsyncThunk(
  "profile/edit",
  async (body: AddProfile, thunkApi) => {
    try {
      const req = await axios.put(
        `http://localhost:8080/user/profile/edit/${body.name}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${body.token}`,
          },
        }
      );
      return await req.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const getProfiles = createAsyncThunk(
  "profile/get",
  async (token: string, thunkApi) => {
    try {
      const req = await axios.get(`http://localhost:8080/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await req.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const setProfilePicture = createAsyncThunk(
  "profile/set/picture",
  async (body: UpdateProfilePicture, thunkApi) => {
    try {
      const req = await axios.put(
        `http://localhost:8080/user/profile/${body.profileId}/image/${body.imageId}`
      );
      return await req.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    selectProfile: (state, action) => {
      state.selectedProfile = action.payload;
    },
    selectProfileEdit: (state, action) => {
      state.editingProfile = action.payload;
    },
    setEditImage: (state, action) => {
      if (state.editingProfile)
        state.editingProfile.profilePicture = action.payload;
    },
    setEditProfile: (state, action) => {
      state.edit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfiles.pending, (state, action) => {
      state = {
        ...state,
        loadingProfiles: true,
      };
      return state;
    });
    builder.addCase(getProfiles.fulfilled, (state, action) => {
      console.log("this is the payload", action.payload);
      state = {
        ...state,
        profiles: action.payload,
        loadingProfiles: false,
        error: false,
      };
      return state;
    });
    builder.addCase(getProfiles.rejected, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: true,
      };
      return state;
    });

    builder.addCase(addProfile.fulfilled, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: false,
      };

      return state;
    });

    builder.addCase(addProfile.pending, (state, action) => {
      state = {
        ...state,
        loadingProfiles: true,
        error: false,
      };

      return state;
    });

    builder.addCase(addProfile.rejected, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: true,
      };

      return state;
    });

    builder.addCase(editProfile.fulfilled, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: false,
      };

      return state;
    });

    builder.addCase(editProfile.pending, (state, action) => {
      state = {
        ...state,
        loadingProfiles: true,
        error: false,
      };

      return state;
    });

    builder.addCase(editProfile.rejected, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: true,
      };

      return state;
    });

    builder.addCase(setProfilePicture.fulfilled, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: false,
        selectedProfile: action.payload,
      };

      return state;
    });

    builder.addCase(setProfilePicture.pending, (state, action) => {
      state = {
        ...state,
        loadingProfiles: true,
        error: false,
      };

      return state;
    });

    builder.addCase(setProfilePicture.rejected, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: true,
      };

      return state;
    });
  },
});

export const {
  selectProfile,
  setEditProfile,
  selectProfileEdit,
  setEditImage,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;

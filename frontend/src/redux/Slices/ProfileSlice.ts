import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Image, User } from "../../utils/GlobalInterfaces";
import axios from "axios";
import { Profile } from "../../utils/GlobalInterfaces";

interface AddProfile {
  name: string;
  imageId: number;
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

interface UpdateProfile {
  profileId: number;
  imageId: number;
  profileName: string;
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
        `${process.env.REACT_APP_API_URL}/user/profile/add/${body.name}/${body.imageId}`,
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
        `${process.env.REACT_APP_API_URL}/user/profile/edit/${body.name}`,
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
      const req = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return await req.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "profile/update",
  async (body: UpdateProfile, thunkApi) => {
    try {
      const req = await axios.put(
        `${process.env.REACT_APP_API_URL}/user/profile/${body.profileId}/image/${body.imageId}/name/${body.profileName}`
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
    updateTempProfile(state, action: PayloadAction<string>) {
      if (state.editingProfile) state.editingProfile.name = action.payload;
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
        editingProfile: null,
      };

      return state;
    });

    builder.addCase(addProfile.pending, (state, action) => {
      state = {
        ...state,
        loadingProfiles: true,
        error: false,
        editingProfile: null,
      };

      return state;
    });

    builder.addCase(addProfile.rejected, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: true,
        editingProfile: null,
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

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: false,
        editingProfile: null,
      };

      return state;
    });

    builder.addCase(updateProfile.pending, (state, action) => {
      state = {
        ...state,
        loadingProfiles: true,
        error: false,
        editingProfile: null,
      };

      return state;
    });

    builder.addCase(updateProfile.rejected, (state, action) => {
      state = {
        ...state,
        loadingProfiles: false,
        error: true,
        editingProfile: null,
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
  updateTempProfile,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;

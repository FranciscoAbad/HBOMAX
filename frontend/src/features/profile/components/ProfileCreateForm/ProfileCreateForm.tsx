import React, {
  ChangeEvent,
  ReactEventHandler,
  useState,
  useEffect,
} from "react";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
import "./ProfileCreateForm.css";
import { validateName } from "../../../../services/validator";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { AppDispatch, RootState } from "../../../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import {
  addProfile,
  editProfile,
  selectProfile,
} from "../../../../redux/Slices/ProfileSlice";
import { useNavigate } from "react-router-dom";
import {
  useLocalStorage,
  useLocalStorageProfile,
} from "../../../../hooks/useLocalStorage";
import { getUserByToken, setToken } from "../../../../redux/Slices/UserSlice";

interface ProfileCreateFormProps {
  edit: boolean;
}

export const ProfileCreateForm: React.FC<ProfileCreateFormProps> = ({
  edit,
}) => {
  const state = useSelector((state: RootState) => state.user);
  const stateProfile = useSelector((state: RootState) => state.profile);
  const [name, setName] = useState<string>(
    stateProfile.editingProfile ? stateProfile.editingProfile.name : ""
  );
  const [valid, setValid] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (edit) {
      setName(
        stateProfile.editingProfile ? stateProfile.editingProfile.name : ""
      );
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setValid(validateName(e.target.value));
  };

  const handleClick = () => {
    dispatch(addProfile({ name: name, token: state.token }));
  };

  const handleClickEdit = () => {
    dispatch(editProfile({ name: name, token: state.token }));
  };
  const conditionalStyles = {
    opacity: valid && name != "" ? 1 : 0.6,
    cursor: valid && name != "" ? "pointer" : "auto",
  };

  return (
    <div className="profile-create-form-container">
      <h1 className="profile-create-form-title">
        {edit ? "Edit profile" : "Create Profile"}
      </h1>
      <div className="profile-create-form-column">
        <div className="profile-create-form-column-wrapper">
          <div className="profile-create-form-column-wrapper-top">
            <div
              className="profile-create-form-column-wrapper-top-box"
              onClick={() => {
                navigate("/profile/adult/character/select");
              }}
            >
              <div className="profile-create-form-column-wrapper-top-box-border"></div>
              <div className="profile-create-form-column-wrapper-top-box-hide">
                <img
                  src={
                    stateProfile.editingProfile?.profilePicture
                      ? stateProfile.editingProfile?.profilePicture.imageURL
                      : "https://play.hbomax.com/a54ac6c243485b4e69b6b1a45e35fb94.png"
                  }
                  className="profile-create-form-column-wrapper-top-box-image"
                />
              </div>
            </div>
          </div>
          <div className="profile-create-form-column-wrapper-mid-one">
            <div className="profile-create-form-column-wrapper-mid-one-img">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAVFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////8wXzyWAAAAHHRSTlMAEG+v3//PX1Dvj39gcJCAsCBAv5+gASHe/u6uaR+3swAAAh1JREFUeAHt2YcW2yAMhWERc0nkxFAg3e//nF0+uBm2upC79J2Z+XsvyOzOGGOMMcYdBo/uwnAk2YmhxIvpEYrOtOkMVSNtuEDZidZ5KGMnz7CeidYMmHFMnUWP2QtpSftM3WXGF57WYBZJQcRMCidSkCxs4Q7hUtHUsmO44FbZL1xxq+4Xxr39woxbvne4HAbPAIchlbXtt4ldw+7MuOGv+fbDiq+q6xh2I57cpUtqSs/9+MA/fg3ZIzxiw6gadhWbglMMBwiqXvh2OXO9phQrboxa4QsWtbj25k170gln3wK+0I3L8j47lfDLZTPKdCeHZWFrhPP25uuWslMItxn2WVgLSSHc/vsonf65f7j9dZXP/6V7OLUZlqdr6h4eMKN1jtttWe9wWJa0uKx99zC3Swp5o+d+YeFT4a/3D2st6ittiFqL2n/fxhUUdif5BASt3WnCrMjn6vTvHDKJpb9uM+ypfzh9z2nxqhB233MhkBXCFKVLnzbDGmHH6zcsJ7+8n1XCNGFRW9qVisVR64I+4kaNKV0r390Ma4WpQhA0b9oCNlWnEm4iNkTtB2wXjxU8kXaY8suV2XWkG25pjxuc3H7PMksaAgPsh0Oxx8YWtrCF/9/w/oOaHl9wpt5evfbSRcqAmY+ps8jiLd0EdUf5ulnNG1p32n2GmwhVSd7dtLwd5WtIrey7E8kuQ/j1yqM37w+O9maMMcYYYz4C1Z9YqmjVk8cAAAAASUVORK5CYII="
                alt=""
              />
            </div>
            <p className="profile-create-form-column-wrapper-mid-one-text">
              Want to upload a photo? User our mobile app.
            </p>
          </div>
          <div className="profile-create-form-column-wrapper-mid-two">
            <ValidatedTextInput
              valid={valid}
              label={"Name"}
              name={"name"}
              changeValue={handleChange}
              data={name}
            />
            {!valid ? (
              <span className="error">
                {" "}
                <ErrorOutlineIcon /> You must enter a name
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="profile-create-column-wrapper-bottom">
            <button
              disabled={valid ? false : true}
              style={conditionalStyles}
              className="profile-create-column-wrapper-bottom-button"
              onClick={handleClick}
            >
              <span>Save</span>
            </button>
            <button
              onClick={() => {
                navigate("/profile/select");
              }}
              className="profile-create-column-wrapper-bottom-button"
            >
              <span>Cancel</span>
            </button>
          </div>
          {edit ? (
            <div
              style={{ margin: 0 }}
              className="profile-create-column-wrapper-bottom"
            >
              <button
                className="profile-create-column-wrapper-bottom-button"
                onClick={handleClick}
              >
                <span>Delete</span>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

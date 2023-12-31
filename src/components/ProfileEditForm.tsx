import React from "react";

const ProfileEditForm = (props: ProfileEditFormTypes) => {
  const { profile, onClickingBack } = props;

  const editProfile = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();

    const target = e.currentTarget.elements;

    props.onClickingProfileUpdate({
      name: target.name.value,
      bio: target.bio.value,
      skills: target.skills.value,
    });
  };

  return (
    <React.Fragment>
      <h1>Edit Profile Form</h1>
      <form onSubmit={editProfile}>
        <input type="text" name="name" placeholder={profile.name ? profile.name : "Profile Name"} />
        <br />
        <input type="text" name="bio" placeholder={profile.bio ? profile.bio : "Profile Bio"} />
        <br />
        <input type="text" name="skills" placeholder={profile.skills ? profile.skills : "Profile Skills"} />
        <br />
        <button onClick={onClickingBack}>Back</button>
        <button type="submit">Update Profile</button>
      </form>
    </React.Fragment>
  );
};

// ############
// #  TYPES
// ############

type FormEvent = React.FormEvent<HTMLFormElement>;

type ProfileEditFormTypes = {
  onClickingProfileUpdate: (data: IProfile) => void;
  onClickingBack: () => void;
  profile: IProfile;
};

interface IProfile {
  name: string;
  bio: string;
  skills: string;
}

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  bio: HTMLInputElement;
  skills: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export default ProfileEditForm;

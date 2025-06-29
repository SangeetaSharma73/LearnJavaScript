import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="ring-2 ring-amber-400 rounded-2xl">
      <img
        src={profile.avatar}
        w={100}
        alt="Profile avatar"
        className="rounded-full"
        w-200
      />

      <div className="text-center text-2xl">
        <h1>
          <strong>Name</strong>:{profile.name}
        </h1>
        <h2>
          <strong>Email:</strong>
          {profile.email}
        </h2>
        <h3>
          <strong>Role:</strong>
          {profile.role}
        </h3>
      </div>
    </div>
  );
};

export default ProfileCard;

import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const AllProfile = () => {
  const [profiles, setProfiles] = useState([]);

  const showProfile = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const users = await res.json();
    console.log(users);
    setProfiles(users);
  };

  useEffect(() => {
    showProfile();
  }, []);
  return (
    <div className="flex justify-evenly m-1 p-1 flex-wrap">
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AllProfile;

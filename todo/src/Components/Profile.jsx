import { useEffect, useState } from "react";
import axios from "axios";
export const Profile = ({ username, token }) => {
  const [profile, setProfile] = useState({});
  //   console.log(token.token, username);

  useEffect(() => {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setProfile(res))
      .catch((err) => console.log(err));
  }, []);

  //   console.log(profile);
  return (
    <div>
      <p>name:{profile.name}</p>
      <p>email:{profile.email}</p>
      <p>username:{profile.username}</p>
      <p>mobile:{profile.mobile}</p>
      <p>discrip{profile.description}</p>
    </div>
  );
};

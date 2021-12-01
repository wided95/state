import React from "react";

const Profile = ({ p }) => {
  return (
    <div className="card" >
      <img src={p.url} alt=""></img>
      <h1 style={{ color: "red" }}>My name is{p.fullName}</h1>
      <p> Profession is {p.profession}</p>
      <p> Level is {p.level}</p>
    </div>
  );
};

export default Profile;

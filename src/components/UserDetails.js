import React from "react";

export default function userDetails(props) {
  const { userDetails } = props;

  return (
    userDetails && <div>
      <img
        style={{ height: "200px", width: "200px" }}
        src={userDetails.avatar_url}
      ></img>
      <h2>{userDetails.name}</h2>
      <p>{userDetails.location}</p>
      <p>{userDetails.bio}</p>
      
    </div>
  );
}

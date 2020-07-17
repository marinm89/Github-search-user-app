import React from "react";

export default function UserRepos(props) {
  const { userRepos } = props;
  console.log("************", userRepos);
  return (
    <div>
      {userRepos &&
        userRepos.map((u) => (
          <div key={Math.random()}>
            <li>{u.full_name}</li>
          </div>
        ))}
    </div>
  );
}

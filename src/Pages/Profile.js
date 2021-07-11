import React, { useEffect } from "react";
import { useHistory } from "react-router";

function Profile({ login }) {
  const history = useHistory();
  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);
  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
}

export default Profile;

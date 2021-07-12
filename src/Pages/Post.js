import React from "react";
import { useLocation, useParams } from "react-router";

function Post() {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <h2>Post Page</h2>
      {id ? (
        <div>
          <h2>Id is - {id}</h2>
          <h2>First Name - {query.get("first")}</h2>
          <h2>Last Name -{query.get("last")}</h2>
        </div>
      ) : (
        <h2>Please Enter Post Id</h2>
      )}
    </div>
  );
}

export default Post;
